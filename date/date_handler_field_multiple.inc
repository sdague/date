<?php
// $Id$

/**
 * @file
 * An extended subclass for field handling that adds multiple field grouping.
 *
 * Fields that want multiple value grouping options in addition to basic
 * field and formatter handling can extend this class.
 */
class date_handler_field_multiple extends content_handler_field_multiple {
  
  function pre_render($values) {
    
    // Store a pre_rendered copy of the view that has no results.
    // We use it in render(), but by that time the view includes
    // results and the object is much larger.
    $this->view_copy = $this->view;
    
    // If there are no values to render (displaying a summary, or query returned no results),
    // or if this is not a grouped field, do nothing specific.
    if (isset($this->view->build_info['summary']) || empty($values) || !$this->defer_query) {
      return parent::pre_render($values);
    }
    
    $field = $this->content_field;
    $db_info = content_database_info($field);
    $options = $this->options;

    // Build the list of vids to retrieve.
    // TODO: try fetching from cache_content first ??
    $vids = array();
    $this->field_values = array();
    foreach ($values as $result) {
      if (isset($result->{$this->field_alias})) {
        $vids[] = $result->{$this->field_alias};
      }
    }

    // List columns to retrieve.
    $alias = content_views_tablename($field);
    // Prefix aliases with '_' to avoid clashing with field columns names.
    $query_columns = array(
      'node.vid AS _vid',
      "$alias.delta as _delta",
      // nid is needed to generate the links for 'link to node' option.
      'node.nid AS _nid',
    );
    // The actual field columns.
    foreach ($db_info['columns'] as $column => $attributes) {
      $query_columns[] = "$alias.$attributes[column] AS $column";
    }
    // If the view has a minimum/maximum date, limited the grouped
    // values to the date range.
    $where = '';
    if (!empty($this->view->date_info->date_handler) && !empty($this->view->date_info->min_date)) {
      $date_handler = $this->view->date_info->date_handler;
      $sql_field = $field_data['fullname'];
      $sql1 = $date_handler->sql_where_date('DATE', $sql_field, ">=", date_format($this->view->date_info->min_date, DATE_FORMAT_DATETIME));
      $sql2 = $date_handler->sql_where_date('DATE', $sql_field, "<=", date_format($this->view->date_info->max_date, DATE_FORMAT_DATETIME));
      $where = $sql1 .' AND '. $sql2;
    }
    $query = 'SELECT '. implode(', ', $query_columns) .
             ' FROM {'. $db_info['table'] ."} $alias".
             " LEFT JOIN {node} node ON node.vid = $alias.vid".
             " WHERE node.vid IN (". implode(',', $vids) .')'. $where .
             " ORDER BY node.nid ASC, $alias.delta ". ($options['multiple']['multiple_reversed'] ? 'DESC' : 'ASC');
    $result = db_query($query);

    while ($item = db_fetch_array($result)) {
      // Clean up the $item from vid and delta. We keep nid for now.
      $vid = $item['_vid'];
      unset($item['_vid']);
      $delta = !empty($item['_delta']) ? $item['_delta'] : 0;
      $item['#delta'] = $item['_delta'];
      unset($item['_delta']);
      $this->field_values[$vid][$delta] = $item;
    }
  }

  function render($values) {
       
    // By this time $values is a pseudo node that will be passed
    // to the theme. Add view information to it.
    $values->view = $this->view_copy;
     
    // If this is not a grouped field, use content_handler_field::render().
    if (!$this->defer_query || empty($this->field_values)) {
      return parent::render($values);
    }

    $field = $this->content_field;
    $options = $this->options;

    $vid = $values->{$this->field_alias};
    if (isset($this->field_values[$vid])) {
      // Gather items, respecting the 'Display n values starting from m' settings.
      $count_skipped = 0;
      $items = array();
      foreach ($this->field_values[$vid] as $item) {
        if (empty($options['multiple']['multiple_from']) || ($count_skipped >= $options['multiple']['multiple_from'])) {
          if (empty($options['multiple']['multiple_number']) || (count($items) < $options['multiple']['multiple_number'])) {
            // Grab the nid - needed for render_link().
            $nid = $item['_nid'];
            unset($item['_nid']);
            $items[] = $item;
          }
          else {
            break;
          }
        }
        $count_skipped++;
      }

      // Build a pseudo-node from the retrieved values.
      $node = $values;
      // content_format and formatters will need a 'type'.
      $node->type = $values->{$this->aliases['type']};
      // Some formatters need to behave differently depending on the build_mode
      // (for instance: preview), so we provide one.
      $node->build_mode = NODE_BUILD_NORMAL;

      if (!empty($field['repeat']) && $options['multiple']['group']) {
        $node->date_repeat_show = TRUE;
      }

      // Render items.
      $formatter_name = $options['format'];
      if ($items && ($formatter = _content_get_formatter($formatter_name, $field['type']))) {
        $rendered = array();
        if (content_handle('formatter', 'multiple values', $formatter) == CONTENT_HANDLE_CORE) {
          // Single-value formatter.
          foreach ($items as $item) {
            $output = content_format($field, $item, $formatter_name, $node);
            if (!empty($output)) {
              $rendered[] = $this->render_link($output, (object) array('nid' => $nid));
            }
          }
        }
        else {
          // Multiple values formatter.
          $output = content_format($field, $items, $formatter_name, $values);
          if (!empty($output)) {
            $rendered[] = $this->render_link($output, (object) array('nid' => $nid));
          }
        }

        if (count($rendered) > 1) {
          // TODO: could we use generic field display ?
          return theme('content_view_multiple_field', $rendered, $field, $values);
        }
        elseif ($rendered) {
          return $rendered[0];
        }
      }
    }

    return '';
  }

}
<?php
// $Id$
/**
 *  Preprocessor to construct back and next navigation from the date argument.
 */
function template_preprocess_date_navigation(&$vars) {
  $view = $vars['view'];
  if (!isset($view->hide_nav)) {
    $min_date = is_object($view->min_date) ? $view->min_date : date_now();
    $max_date = is_object($view->max_date) ? $view->max_date : date_now();
    $prev_date = drupal_clone($min_date);
    date_modify($prev_date, '-1 '. $view->granularity);
    $next_date = drupal_clone($min_date);
    date_modify($next_date, '+1 '. $view->granularity);
    $format = array('year' => 'Y', 'month' => 'Y-m', 'day' => 'Y-m-d');
    switch ($view->granularity) {
      case 'week':
        $next_week = date_week(date_format($next_date, 'Y-m-d'));
        $prev_week = date_week(date_format($prev_date, 'Y-m-d'));
        $next_path = str_replace($view->date_arg, date_format($next_date, 'Y-\W') . $next_week, $view->get_url());
        $prev_path = str_replace($view->date_arg, date_format($prev_date, 'Y-\W') . $prev_week, $view->get_url());
        break;
      default:
        $next_path = str_replace($view->date_arg, date_format($next_date, $format[$view->granularity]), $view->get_url());
        $prev_path = str_replace($view->date_arg, date_format($prev_date, $format[$view->granularity]), $view->get_url());
    }
  }
  else {
    $next_path = '';
    $prev_path = '';
  }
  
  $vars['next_url'] = $next_path;
  $vars['prev_url'] = $prev_path;
    
  if (!empty($view->block) && $view->granularity == 'month') {
	  // Month navigation titles are used as links in the block view.
	  $nav_title = l(date_format_date($view->min_date, 'custom', 'M'), str_replace($view->date_arg, date_format($view->min_date, 'Y-m'), $view->get_url()));
  }
  else {
    // Otherwise, just show the date.
    $nav_title = theme('date_nav_title', $view->granularity, $view);
  }
  $vars['nav_title'] = $nav_title;
  $vars['block'] = !empty($view->block);
}
/**
 * Theme the calendar title
 */
function theme_date_nav_title($granularity, $view) {
  switch ($granularity) {
    case 'year':
      return $view->year;
    case 'month':
      return date_format_date($view->min_date, 'custom', 'F');
    case 'day':
      return date_format_date($view->min_date, 'custom', 'l, F j Y');
    case 'week':
    	return t('Week of @date', array('@date' => date_format($view->min_date, 'F j')));
  }
}

/**
 *  Preprocessor to construct an ical vcalendar
 * 
 * @param $events
 *   An array of events where each event is an array keyed on the uid:
 *    'start'         => start date object,
 *    'end'           => end date object,
 *                         optional, omit for all day event.
 *    'summary'       => Title of event (Text)
 *    'description'   => Description of event (Text)
 *    'location'      => Location of event (Text)
 *    'uid'           => ID of the event for use by calendaring program.
 *                         Recommend the url of the node
 *    'url'           => URL of event information
 *
 * @param $calname
 *   Name of the calendar.  Use site name if none is specified.
 * 
 */
function template_preprocess_date_vcalendar(&$vars) {
    
  $vars['current_date'] = date_format(date_now(), DATE_FORMAT_ICAL);
  $vars['site_timezone'] = date_default_timezone_name();
  $vars['calname'] = !empty($vars['calname']) ? $vars['calname'] : date_ical_escape_text(variable_get('site_name', ''));
  
  // Format the event results as iCal expects.
  $events_in = $vars['events'];
  $events = array();
  foreach ($events_in as $uid => $event) {
    // Omit any items with empty dates.
    if (!empty($event['start'])) {
      $events[$uid] = $event;
      $timezone = timezone_name_get(date_timezone_get($event['start']));
      if (!empty($timezone)) {
        $events[$uid]['timezone'] = "TZID=$timezone;";
      }
      else {
        $events[$uid]['timezone'] = '';
      }
      $events[$uid]['start'] = date_format($event['start'], DATE_FORMAT_ICAL);
      if ($event['start'] && $event['end']) {
        $events[$uid]['end'] = date_format($event['end'], DATE_FORMAT_ICAL);
      }
      else {
        $events[$uid]['end'] = $events[$uid]['start'];
      }
      // Escape text values.
      foreach ($event as $key => $value) {
        if (in_array($key, array('summary', 'description', 'location'))) {
          $events[$uid][$key] = date_ical_escape_text($value);
        }
      }
    }
  }
  
  $vars['events'] = $events;  
}
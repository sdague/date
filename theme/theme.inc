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
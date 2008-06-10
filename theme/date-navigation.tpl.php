<?php
// $Id$
/**
 * @file
 * Template to display date navigation links.
 *
 * $nav_title
 *   The formatted title for this view. In the case of block
 *   views, it will be a link to the full view, otherwise it will 
 *   be the formatted name of the year, month, day, or week.
 * $prev_url
 * $next_url
 *   Urls for the previous and next calendar pages. The links are 
 *   composed in the template to make it easier to change the text,
 *   add images, etc.
 * $block: 
 *   Whether or not this view is in a block.
 * $view
 *   The view object for this navigation.
 * 
 * The &nbsp; in the prev and next divs is to be sure they are never
 * completely empty, needed in some browsers to prop the header open
 * so the title stays centered.
 * 
 */
?>
<div class="date-nav clear-block">
  <div class="prev">
    <?php if (!empty($prev_url)) : ?>
      <span class="next"> <?php print l($block ? '«' : t('« prev'), $prev_url); ?></span>
    <?php endif; ?>
  &nbsp;</div>
  <div class="heading">
    <h3><?php print $nav_title ?></h3>
  </div>
  <div class="next">&nbsp;
    <?php if (!empty($next_url)) : ?>
      <span class="next"> <?php print l($block ? '»' : t('next »'), $next_url); ?></span>
    <?php endif; ?>  
  </div>
</div>

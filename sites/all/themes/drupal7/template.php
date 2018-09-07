<?php

function drupal7_preprocess_page(&$variables) {
    $variables['drupal7_subheading'] = theme_get_setting('drupal7_subheading');

    if (isset($variables['node'])) {
        if ($variables['node']->type == 'page') {
            drupal_add_css(drupal_get_path('theme','drupal7')."/style.css");
        }
    }

    if (isset($variables['node'])) {
        if ($variables['node']->type == 'product') {
            drupal_add_css(drupal_get_path('theme','drupal7')."/drupal7.css.less");
            drupal_add_css(drupal_get_path('theme','drupal7')."/drupal7-grid.css.less");
        }
    }

}
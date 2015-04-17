<?php

if (is_file('vendor/autoload.php')) {
  require 'vendor/autoload.php';
}

$styleguide = new cultusrego(array(
  'source' => '../css/avalanche.css',
  'title' => 'avalanche Styleguide',
  'description' => 'SASS / CSS Framework',
  'template_folder' => __DIR__ . '/templates',
  'twig_cache' => FALSE,
));
$styleguide->render();

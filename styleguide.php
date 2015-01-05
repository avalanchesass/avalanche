<?php

if (is_file('vendor/autoload.php')) {
  require 'vendor/autoload.php';
}

$styleguide = new cultusrego(array(
  'source' => 'dist/avalanche.css',
  'title' => 'avalanche Styleguide',
  'description' => 'SASS / CSS Framework',
  'twig_cache' => FALSE,
));
$styleguide->render();
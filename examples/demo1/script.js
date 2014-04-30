/**
 * Menu style switcher
 */
(function ($) {
  var $active_button;
  var $style_switcher = $('.menu-style-switcher');
  var $buttons        = $style_switcher.find('.button');
  var $menu           = $('.menu');

  $style_switcher.on('click', '.button', function () {
    $active_button = $(this);

    $buttons.addClass('button--inactive');
    $active_button.removeClass('button--inactive');
    $menu.attr('class', 'menu ' + $active_button.data('menu-class'));
  });
})(jQuery);
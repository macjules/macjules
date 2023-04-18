/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/

(function ($) {

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    let scrollMax=$(document).height()-$(window).height();
    if (Math.min(document.body.scrollTop, scrollMax) > 70 || Math.min(document.documentElement.scrollTop, scrollMax) > 70 && document.documentElement.scrollTop<=scrollMax) {
      document.body.classList.add("lccf-small-logo");
    } else if (document.body.scrollTop < 5 && document.documentElement.scrollTop < 5) {
      document.body.classList.remove("lccf-small-logo");
    }
  }
})(jQuery);
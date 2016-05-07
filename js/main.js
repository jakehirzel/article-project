// Custom jQuery

// Apply .odd to first article in any rows with odd article amounts
var main = function() {
  $('.row').each(function() {
    if ($(this).children('article').length % 2 != 0) {
      $(this).children('article:first').addClass('odd');
    }
  });
};

// Run main
$(document).ready(main);

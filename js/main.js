!function($) {

  'use strict';

  $(document).ready(function() {
    $('#show-tips').click(function() {
      var lis = $('#tips').find('li')
      lis.not(':visible').first().show()
      if (!lis.not(':visible').length) {
        $(this).hide()
      }
    })
  })

}(window.jQuery);

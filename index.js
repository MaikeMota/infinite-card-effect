$(function() {
    $('body').on('click', '.card', function() {
      $(this).next().css('opacity', 1);
      $(this).css({'opacity': 0, 'visibility': 'hidden'});
      var lastCard = $('<div />', {
          "class": 'card last-card'});
      $('.card').each(function() {
        var newZ = parseInt($(this).css('transform').split(',')[14]) + 10;
        var newZIndex = parseInt($(this).css('z-index')) + 1;
        $(this).css({
          'transform': 'translate3d(-50%, -50%, ' + newZ + 'px)',
          'z-index': newZIndex
        });
        $('.container').append(lastCard);
      });
      
    })
  })
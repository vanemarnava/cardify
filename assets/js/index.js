(function() { 
// permite extender las funciones en jQuery 
  $.fn.extend({
    // objeto
    superPic: function() {
      return this.each(function() {
        let imgs = $(this).find('areaGallery img');
        let figureImage = $(this).find('figure');
        let captionText = $(this).find('.text');
        imgs.css({
          'width': '100%', 
          'height': '12em',
          'margin': '1em 0'
          });
        imgs.wrap('<figure></figure>');
        figureImage.css({'width': '100%',
          'display': 'inline-block', 
          'text-align': 'center',
          'margin-top': '3em',
          // 'border': '5px solid purple',
          'color': 'white'
        });
        imgs.mouseover(hover());        
        function effect(event) {
          captionText.show();
        }
        function hover(index, element) { 
          let text = $(element).attr('alt');
          let captionText = $(this).find('.text');
          $(element).after('<figcaption class="text">' + text + '</figcaption>');
          captionText.css({'position': 'absolute',
            'top': '50%',
            'left': '50%',
            'transform': 'translateX(-50%) translateY(-50%)',
            'margin': '0',
            'width': '100%',
            'text-align': 'center',
            'font-size': '1.5em',
            'transition': 'all 1s ease-in-out'
          });
          $(this).css({'filter': 'brightness(10%)', 
            '-webkit-filter': 'brightness(30%)',
            '-moz-filter': 'brightness(30%)', 
            '-o-filter': 'brightness(30%)',
            '-ms-filter': 'brightness(30%)',
            'filter': 'grayscale(30%)',
            'transition': 'all 1s ease-in-out'
          });
        }

      });
    }
  });
})(jQuery);
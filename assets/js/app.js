(function() { 
// permite extender las funciones en jQuery 
  $.fn.extend({
  	// objeto
    superPic: function() {
      return this.each(function first() {
      	// definiendo tamano de las imagenes
        
        $(this).find('img').css({'width': '30em', 
        	'height': '20em',
        	'border': '5px solid orange',
        	'border-radius': '5em'
        });

        // wrap envolvera a cada imagen en un figure ver crear clase para css
        $(this).find('img').wrap('<figure></figure>');
        // agregar el texto que se encuentra contenido en el alt a un figcaption
        
        $(this).find('img').each(function(index, element) {
        	// 
          var text = $(element).attr('alt');

          $(element).after('<figcaption class="text">' + text + '</figcaption>');
        });

        // estilo contenido etiqueta figure
        $(this).find('figure').css({'width': '100%',
          'display': 'inline-block', 
          'text-align': 'center',
          'margin-top': '3em',
          // 'border': '5px solid purple',
          'color': 'white'
        });

        // estilos contenido al pasar el mouse
        $(this).find('figure').mouseover(function() { 
        	// mostrar texto de figcaption
          $(this).find('.text').show();
          // estilos de los textos de figcaption
          $(this).find('.text').css({'position': 'absolute',
            'top': '50%',
            'left': '50%',
            'transform': 'translateX(-50%) translateY(-50%)',
            'margin': '0',
            'width': '100%',
            'text-align': 'center',
            'font-size': '1.5em',
            'transition': 'all 1s ease-in-out'
          });

          // estilos de las imagenes
          $(this).find('img').css({'filter': 'brightness(10%)', 
            '-webkit-filter': 'brightness(30%)',
            '-moz-filter': 'brightness(30%)', 
            '-o-filter': 'brightness(30%)',
            '-ms-filter': 'brightness(30%)',
            'filter': 'grayscale(30%)',
            // 'border': '5px solid green',
            'transition': 'all 1s ease-in-out'
          });

          // estilo del contenedor padre, div de columnas
          $(this).parent().css({'position': 'relative',
            'z-index': '1', 
            '-webkit-transform': 'scale(1.2)',
            '-moz-transform': 'scale(1.2)',
            '-ms-transform': 'scale(1.2)',
            '-o-transform': 'scale(1.2)',
            'transform': 'scale(1.2)',
          	'border': '5px solid yellow',
          	'transition': 'scale 1s ease-in-out'
          });
        });

        // cuando el mouse sale de la etiqueta figure
        $(this).find('figure').mouseleave(function(event) {
        	// esconder el texto
          $(this).find('.text').hide();

          // delvolver el contenedor a su estado inicial
          $(this).parent().css({'position': 'relative',
            'z-index': '0',
            '-webkit-transition': 'scale(1.0)',
            '-moz-transform': 'scale(1.0)',
            '-ms-transform': 'scale(1.0)',
            '-o-transform': 'scale(1.0)',
            'transform': 'scale(1.0)',
            'border': '5px solid blue'
          });

          $(this).find('figure').css({'display': 'none', 
            'background-color': 'transparent'
          });
          $(this).find('img').css({'filter': 'brightness(100%)', 
            '-webkit-filter': 'brightness(100%)'
          });

        });
      });
    }
  });
})(jQuery);

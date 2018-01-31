// ojo arreglando y verificando las funciones

const $ = require("jquery");

$(document).ready(function() {
    //Llamando al plugin
    $('.container').cardify({});
});

(function() { 
// permite extender las funciones en jQuery 
  $.fn.extend({
    // objeto
    cardify: function() {
      return this.each(function getImages(event) {
        let imgs = $(this).find('.areaGallery img');
        imgs.wrap('<figure></figure>');
        let figure = $(this).find('figure');
        figure.css({
          'width': '100%',
          'display': 'inline-block', 
          'text-align': 'center',
          'margin-top': '3em',
          'color': 'white'
        });  
        imgs.css({
          'width': '100%',
          'object-fit': 'cover', 
          'height': '12em',
          'margin': '1em 0'    
        });
        $(this).find('img').each(function(index, element) {
          var text = $(element).attr('alt');
          $(element).after('<figcaption class="text">' + text + '</figcaption>');
        });
        let figCaption = $(this).find('.text');
        figCaption.css({'position': 'absolute',
          'top': '50%',
          'left': '50%',
          'display': 'none',
          'transform': 'translateX(-50%) translateY(-50%)',
          'margin': '0',
          'width': '100%',
          'text-align': 'center',
          'font-size': '1.5em',
          'transition': 'all 1s ease-in-out'
        });
        figure.parent().css({'position': 'relative',
          'z-index': '1', 
          '-webkit-transition': 'all 1s ease; /* Safari and Chrome */',
          '-moz-transition': 'all 1s ease; /* Firefox */',
          '-ms-transition': 'all 1s ease; /* IE 9 */',
          '-o-transition': 'all 1s ease; /* Opera */',
          'transition': 'all 1s ease'
        });
        figure.mouseover(showOverlay);
        figure.mouseleave(hideOverlay);
      });

      function showOverlay(event) {
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
        $(this).parent().css({
          'position': 'relative',
          'z-index': '1',
          '-webkit-transition': 'all 1s ease; /* Safari and Chrome */',
          '-moz-transition': 'all 1s ease; /* Firefox */',
          '-ms-transition': 'all 1s ease; /* IE 9 */',
          '-o-transition': 'all 1s ease; /* Opera */',
          'transition': 'all 1s ease',
          '-webkit-transform': 'scale(1.2)',
          '-moz-transform': 'scale(1.2)',
          '-ms-transform': 'scale(1.2)',
          '-o-transform': 'scale(1.2)',
          'transform': 'scale(1.2)',
          'transition': 'all 1s ease'
        });
      };

      function hideOverlay(event) {
        // esconder el texto
        $(this).find('.text').hide();
        // delvolver el contenedor a su estado inicial
        $(this).parent().css({'position': 'relative',
          'z-index': '0',
          '-moz-transform': 'scale(1.0)',
          '-ms-transform': 'scale(1.0)',
          '-o-transform': 'scale(1.0)',
          'transform': 'scale(1.0)',
          '-webkit-transition': 'all 1s ease; /* Safari and Chrome */',
          '-moz-transition': 'all 1s ease; /* Firefox */',
          '-ms-transition': 'all 1s ease; /* IE 9 */',
          '-o-transition': 'all 1s ease; /* Opera */',
          'transition': 'all 1s ease'
        });
        $(this).find('figure').css({'display': 'none', 
          'background-color': 'transparent'
        });
        $(this).find('img').css({'filter': 'brightness(100%)', 
          '-webkit-filter': 'brightness(100%)'
        });
      };
    }
  });
}($));


const cardifysuper = {};
cardifysuper.extension = function(img) {
  const imagen = $("img");
  const archivo = $("img").attr('src');
  const cadaArchivo = $(imagen).each(function() {
  const extensiones = archivo.substring(archivo.lastIndexOf("."));
    if (extensiones != ".jpg" & extensiones != ".png" & extensiones != ".gif") {
      /*alert("El archivo de tipo " + extensiones + " no es válido");*/
    } else {
      /*alert("El archivo de tipo " + extensiones + " es válido");*/
    }
  })
}
cardifysuper.extension();

cardifysuper.alt = function(alt) {
        const imagen = $("img");
        const atributo = $("img").attr('alt');
        const cadaArchivo = $(imagen).each(function() {
                if (atributo == "") {
                    /*alert('Archivo no contiene atributo alt');*/
                } else {
                    /*alert('Archivo si contiene atributo alt');*/
                }
            });
        };
cardifysuper.alt();

module.exports = cardifysuper;

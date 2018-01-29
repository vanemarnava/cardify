// ojo arreglando y verificando las funciones

const $ = require("jquery");

$(document).ready(function() {
    //Llamando al plugin
    $('.container').cardify({});
});

//plugin de cardify
(function() { 
// permite extender las funciones en jQuery 
  $.fn.extend({
    // objeto
     cardify: function() {
      return this.each(function() {
        
        // definiendo tamano de las imagenes
        $(this).find('.areaGallery img').css({'width': '100%',
          'height': '12em', 
          'object-fit': 'cover',
          // 'border': '5px solid orange',
          'border-radius': '1em'
        });

        //llamando a las funciones necesarias
        createFigureTagg(this);

        createFigcaptionTagg (this);

        hideFigcaption(this);

        // estilos contenido al pasar el mouse
        $(this).find('figure').mouseover(newImagen);

        // cuando el mouse sale de la etiqueta figure
        $(this).find('figure').mouseleave(oldImage);

        // esconder el texto
        $(this).find('.text').hide();

      });
    }
  });
})($); // jQuery cambiado por signo "$" 

// funciones
// funcion que crea etiqueta figure y le da estilos
function createFigureTagg (element){

  $(element).find('.areaGallery img').wrap('<figure></figure>');

  // estilo contenido etiqueta figure
  $(this).find('figure').css({'width': '100%',
    'display': 'inline-block', 
    'text-align': 'center',
    'margin-top': '3em',
    'color': 'white'
  });
}

// funcion que crea etiqueta figcaption
function createFigcaptionTagg (element){
  $(element).find('.areaGallery img').each(function(index, element) {
  var text = $(element).attr('alt');
  $(element).after('<figcaption class="text">' + text + '</figcaption>');
  });
}

// funcion para ocultar el figcaption 
function hideFigcaption(element) {
  $('.text').hide();
  $(element).find('figure').css({'width': '100%', 
    'display': 'inline-block', 
    'color': 'white'
  });
}

// funcion para cambiar imagen
function newImagen() {
        
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
  $(this).find('.areaGallery img').css({'filter': 'brightness(10%)', 
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
}

function oldImage() {

  // esconder el texto de figcaption
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
  $(this).find('.areaGallery img').css({'filter': 'brightness(100%)', 
    '-webkit-filter': 'brightness(100%)'
  });
}

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




<p align="center">
 <a href="https://carol-solivos.github.io/cardify">
   <img src="assets/img/logo-superpic.jpg" width=200 height=auto>
 </a>

 <p align="center">
 	Imágenes interactivas con efectos hover.
   <br>
   <a href="https://carol-solivos.github.io/cardify"><strong>Demo &raquo;</strong></a>
 </p>
</p>

<br>

<p>Super-Pictures es un Plugin de jQuery que permite darle a las imagenes de tu proyecto un estilo hover elegante que ayudará a que se vea visualmente atractivo e interactivo.</p>


### Cómo funciona?

Envolverá a tus imagenes con etiquetas `figure`, la descripción que agregaste al atributo `alt` se almacenará en una etiqueta `figcaption`, mostrándose en el efecto hover.
 

Instrucciones de instalación
----------------------------

<p>Intrucciones para implementar esta libreria en tu proyecto</p>


#### Desde npm

1. En la terminal debes posicionarte en la carpeta de tu proyecto e introducir el comando `npm init`, se creará el archivo `package.json`.

2. Luego introducir el comando `npm install super-pictures` para que se instale el package.

3. Antes de finalizar el body de tu proyecto debes introducir estos dos scripts `<script src="node_modules/super-pictures/lib/main.js"></script>`

`<script>$('.container').cardify({});</script>`

4. Debes tener esta estructura en tus imagenes

``<div class="container">
    <div class="areaGallery">
        <img src="" alt="">
    </div>
  </div>``


#### Método CDN

1. Antes de que termine el body de tu proyecto debes linkear `<script src="https://cdn.rawgit.com/carol-solivos/cardify/superpictures/lib/main.js"></script>`

2. Debes tener esta estructura en tus imagenes

``<div class="container">
    <div class="areaGallery">
        <img src="" alt="">
    </div>
  </div>``


Dependencias
------------

>### Desarrollo
>
>* Eslint v4.15.0
>* Mocha
>* Chai
>* babel
>* Browserify


>### Producción 
>
>* Bootstrap 4.0.0
>* JQuery 


Autoras
-------
 
[*Carol Sepúlveda*](https://github.com/carol-solivos) & [*Vanessa Martínez*](https://github.com/vanemarnava)


Licencia
--------

*The SCI License*

*Copyright (C) 2018 ~ Super-Pictures*




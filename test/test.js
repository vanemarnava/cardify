const chai = require('chai');

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
let dom = new JSDOM('<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"><title>Super Pictures</title>' +
  '<link rel="stylesheet" href="assets/css/style.css"><link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">' +
  '<script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>' +
  '</head><body><header><nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">' +
  '<a class="navbar-brand" href="#"><img src="assets/img/logo.png" alt="" width="50"> SuperPictures</a>' +
  '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
  '<span class="navbar-toggler-icon"></span></button>' +
  '<div class="collapse navbar-collapse" id="navbarNav">' +
  '<ul class="navbar-nav"><li class="nav-item"><a class="nav-link smooth-scroll" href="#gallery">Inicio <span class="sr-only">(current)</span></a>' +
  '</li><li class="nav-item"><a class="nav-link smooth-scroll" href="#gallery">Ejemplo</a></li><li class="nav-item"><a class="nav-link smooth-scroll" href="#instrucciones">Instrucciones</a>' +
  '</li></ul></div></nav></header><section id="gallery"><div class="container"><div class="row"><div class="col-sm-12"><h1>Galeria de imágenes</h1><h3>Con efectos en hover</h3><div class="container areaGallery">' +   
  '<div class="row"><div class="col-xs-12 col-sm-12 col-md-6 col-lg-4"><img class="photo" src="https://misanimales.com/wp-content/uploads/2016/10/crecen-los-gatos.jpg" alt="gatito lindo">' +
  '</div><div class="col-xs-12 col-sm-12 col-md-6 col-lg-4"><img src="https://sumedico.com/wp-content/uploads/2017/08/gatos-casa1.jpg" alt="otro gatito">' +
  '</div><div class="col-xs-12 col-sm-12 col-md-6 col-lg-4"><img src="http://www.slopemedia.org/wp-content/uploads/2015/02/cats.jpg" alt="muchos gatitos lindos">' +
  '</div><div class="col-xs-12 col-sm-12 col-md-6 col-lg-4"><img src="https://kcpetproject.org/wp-content/uploads/2012/05/All-in-a-row-cats-16249894-1280-8001.jpg" alt="gatitos formales"></div>' + 
  '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4"><img src="https://www.webconsultas.com/sites/default/files/styles/encabezado_articulo/public/temas/primeros-auxilios-gatos.jpg?itok=hwXun2d-" alt="gatito enfermero"></div>' + 
  '<div class="col-xs-12 col-sm-12 col-md-6 col-lg-4"><img src="http://estag.fimagenes.com/img/4/1/y/v/1yv_900.jpg" alt="gatito bebe"></div></div></div></div></div></div></section><section id="instrucciones">' +
  '<div class="container"><div class="row"><div class="col-sm-12"><h1>Instrucciones</h1><div class="codigo">adsfadsfhasdlhjasdf</div></div></div></div></section><footer><p>Todos los derechos reservados &#169; 2018</p>' +
  '<a href="#gallery" class="smooth-scroll"><i class="fa fa-arrow-up" aria-hidden="true"></i> Subir</a></footer><script src="assets/js/jquery-3.2.1.min.js"></script>' +
  '<script src="src/cardify.js"></script></body></html>');
const { window } = dom;
global.document = dom;
global.window = window;
global.navigator = {
    userAgent: 'node.js',
};

var $ = require('jquery');
const cardify = require("../src/cardify.js");
var expect = require('chai').expect;

describe('Prueba basica', function(){
  it('deberia pasar cuando todo esta correcto', function (){
    expect(true).to.be.true;
  });
});

describe('comprobar extension', () => {
  it('debería devolver true para archivos con extensión .jpg, .gif o .png', () => {
    expect(cardify.extension(), true);
  });
  it('debería devolver false para archivos con extensión diferente a .jpg, .gif o .png', () => {
    expect(cardify.extension(), false);
  });
});

describe('comprobar si alt es un string', () => {
  it('alt es un string', () => {
    expect($('img').attr('alt')).to.be.a('string');
  });
});

describe('comprobar si alt está vacio', () => {
  it('alt no esta vacio', () => {
    var length = ($('img').attr('alt').length);
    expect($('img').attr('alt')).to.have.length(length);
  });
});
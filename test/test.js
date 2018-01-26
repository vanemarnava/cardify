const index = require('../assets/js/index');
const assert = require('chai').assert;
const search = require('../assets/js/index').search;
const superPic = require('chai').superPic;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var $ = require('jquery');

describe('buscar img y ponerle figure', () => {
	it('debe buscar una imagen', () => {
		assert.exists(search(), '3');
	})
});

describe('buscar img y ponerle figure', () => {
	it('debe buscar una imagen', () => {

	})
	it('app debe devolver string', () => {
		let result = search();
		assert.typeOf(result, 'string');
	})
	it('no tiene que estar vacio', () => {
		let result = superPic();
  	assert.isNotNull(result, 'there was no error');
	})
});
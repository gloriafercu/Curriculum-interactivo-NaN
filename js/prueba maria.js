'use strict';

//prueba para añadir todo

function rellenar () {
	var contenedor = this.parentElement;


	var campos = contenedor.querySelectorAll('.fields');
	var preview = contenedor.querySelectorAll('.prev');
	var btnSave = contenedor.querySelector('.save');


		for (var i = 0; i < preview.length; i++) {
			preview[i].innerHTML = campos[i].value;
		}
		return campos.value;
	}
	btnSavePersonal.addEventListener('click', rellenar);

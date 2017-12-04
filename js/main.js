"use strict";


//RELLENO DE CAMPOS CON PROMPT
function seleccionar(item, pregunta) {
	var rellenar = document.querySelector('#' + item);
	rellenar.innerHTML= prompt(pregunta);
}

//DESPLEGABLE CABECERA

function mostrarcapa() {
	document.getElementById('menudespleg').style.visibility = 'visible';
}

function ocultarcapa() {
	document.getElementById('menudespleg').style.visibility = 'hidden';
}


// DESPLEGABLES DE FORMULARIO
function mostrarOcultar(item){
	var element = document.getElementById(item);
	var boxfield = document.querySelectorAll('.boxfield');
	// Eliminamos la clase active a todos los elementos
	for (var i = 0; i < boxfield.length; i++) {
			boxfield[i].classList.remove('active');
	}
	// añado active al elemento seleccionado
	element.classList.add('active');

}

/*Funcion para añadir numeros a los select*/

var select = document.querySelectorAll('.years');

function list(firstyear, totalyears) {
	var options = '';
	for (var x = 0; x < totalyears; x++){
	options = options + '<option value="">'+(firstyear + x)+'</option>';
	}
	return options
}
//Añadir años a los select
	for (var i = 0; i < select.length; i++){
		select[i].innerHTML=list(1950, 100);
	}

//Añadir meses a los selct
var select = document.querySelectorAll('.month');

for (var i = 0; i < select.length; i++){
	select[i].innerHTML=list(1, 12);
}


//Seleccionar estudios
var studyOptions = ''
studyOptions = studyOptions + '<option value="Seleccionar">Seleciona estudios</option>';
studyOptions = studyOptions + '<option value="Sin estudios">Sin estudios obligados</option>';
studyOptions = studyOptions + '<option value="Eso">ESO</option>';
studyOptions = studyOptions + '<option value="FPBasica">FP Básica</option>';
studyOptions = studyOptions + '<option value="FPMedia">FP Media</option>';
studyOptions = studyOptions + '<option value="FPSuperior">FP Superior</option>';
studyOptions = studyOptions + '<option value="Uni">Estudios universitarios</option>';
studyOptions = studyOptions + '<option value="Postgrado">Postgrado</option>';
studyOptions = studyOptions + '<option value="Estudios sin convalidar">Estudios sin convalidar</option>';
// document.querySelector('.type-studies').innerHTML = studyOptions;

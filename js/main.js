"use strict"

//PLEGAR Y DESPLEGAR
function ocultar(item){
	document.querySelector("#" + item).style.display = 'none';
}
function mostrar(item){
document.querySelector("#" + item).style.display = 'block';
}

//RELLENO DE CAMPOS CON PROMPT
function seleccionar(item, pregunta) {
	var rellenar = document.querySelector("#" + item);
	rellenar.innerHTML= prompt(pregunta);
}

//DESPLEGABLE CABECERA

function mostrarcapa()
{
document.getElementById("menudespleg").style.visibility = 'visible';

}

function ocultarcapa()
{
document.getElementById("menudespleg").style.visibility = 'hidden';

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
		select[i].innerHTML=list(1900, 150);
	}
//Añadir meses a los selct
	var select = document.querySelectorAll('.month');
for (var i = 0; i < select.length; i++){
	select[i].innerHTML=list(1, 12);
}

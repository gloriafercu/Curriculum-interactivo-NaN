'use strict';

var camposDatos = document.querySelectorAll('.personal-fields');
var previewDatos = document.querySelectorAll('.prev-contactdetails');
var btnSavePersonal = document.querySelector('.save-personal');

function rellenarPersonal() {
	for (var i = 0; i < previewDatos.length; i++) {
		previewDatos[i].innerHTML = camposDatos[i].value;
		console.log("Entro en el for");
	}
	return camposDatos.value;
}

// RELLENAR Y AÑADIR EXPERIENCIA PROFESIONAL


// var camposJob = document.querySelectorAll('.job-fields');
// var previewJob = document.querySelectorAll('.prev-job');


// function rellenarJobs() {
// 	for (var i = 0; i < previewJob.length; i++) {
// 		previewJob[i].innerHTML = camposJob[i].value;
// 	}
// 	return camposJob.value;
// }
var buttonAddJob = document.querySelector('.add-job');

function saveNewJobs() {
	var addJob = '<li class="prev-jobdetails-job">Puesto de trabajo: <span id="trabajo" class="prev-job">' + document.getElementById('job').value + '</span></li>' + '<li class="prev-jobdetails-charge">Cargo: <span id="cargo" class="prev-job">' + document.getElementById('job-charge').value+ '</span></li>' + '<li id="jobdetails-company" class="prev-jobdetails-company">Empresa: <span id="empresa" class="prev-job">' + document.getElementById('job-bussines').value + '</span></li>' + '<li class="prev-jobdetails-date"><ul class="prev-jobdate"><li id="jobdate-start" class="prev-jobdate-start">Fecha de inicio: <span id="inicio-mes" class="prev-job">' + document.getElementById('job-month-start').value +
	'</span>/<span id="inicio-año" class="prev-job">' + document.getElementById('job-year-start').value +
	'</span class="prev-job"></li><li id="jobdate-end" class="prev-jobdate-end">Fecha de final: <span id="fin-mes" class="prev-job">' +
	document.getElementById('job-month-end').value +
	'</span>/<span id="fin-año" class="prev-job">' + document.getElementById('job-year-end').value +
	'</span></li>'+
	'<li class="prev-jobdetails-description">Descripción del cargo: <span id="descripcion-trabajo" class="prev-job">' + document.getElementById('job-extract').value +
	'</span></li>' +
	'<br>';

	var newJob = document.querySelector('.prev-jobdetails');
	newJob.innerHTML += addJob;
	document.getElementById('job').value="";
	document.getElementById('job-charge').value="";
	document.getElementById('job-bussines').value="";
	document.getElementById('job-month-start').value="";
	document.getElementById('job-year-start').value="";
	document.getElementById('job-month-end').value="";
	document.getElementById('job-year-end').value="";
	document.getElementById('job-extract').value="";
}





// RELLENAR Y AÑADIR EDUCACIÓN


var btnAddEdu = document.querySelector('.add-edu');
function addMoreEducation () {
	var moreEducation = '<ul class="prev-educationdetails"><li id="educationdetails-studies" class="prev-educationdetails-studies">Titulación: <span id="titulacion" class="prev-edu">' + document.querySelector(".edu-fields").value + '</span></li><li id="educationdetails-type-studies" class="prev-educationdetails-type-studies">Tipo de estudios: <span id="tipo-estudios" class="prev-edu">'+ document.querySelector(".edu-fields").value + '</span></li><li id="educationdetails-centre" class="prev-educationdetails-centre">Centro de estudios: <span id="centro" class="prev-edu">'+ document.querySelector(".edu-fields").value +'</span></li><li class="prev-educationdetails-date"><ul class="prev-educationdate"></ul>'
	/*<li id="educationdate-start" class="prev-educationdate-start">Año de inicio: <span>'+ document.querySelector(".years edu-fields-start").value +'</span></li><li id="educationdate-end" class="prev-educationdate-end">Año de finalización:<span id="año-fin" class="prev-edu">'
	 + document.querySelector(".years edu-fields-end").value + '</span></li></ul></li>*/

	/*''
	'
	'<li id="educationdetails-description" class="prev-educationdetails-description"> Descripción: <span id="descripcion-estudios" class="prev-edu"></span></li>*/

	var container = document.querySelector('.prev-education');
	container.innerHTML += moreEducation;

}

btnSavePersonal.addEventListener('click', rellenarPersonal);
buttonAddJob.addEventListener('click', saveNewJobs);
btnAddEdu.addEventListener('click', addMoreEducation);

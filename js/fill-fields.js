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
// var btnSaveJob = document.querySelector('.save-job');


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

buttonAddJob.addEventListener('click', saveNewJobs);



// RELLENAR Y AÑADIR EDUCACIÓN


var camposEdu = document.querySelectorAll('.edu-fields');
var previewEdu = document.querySelectorAll('.prev-edu');
var btnSaveEdu = document.querySelector('.save-edu');

function rellenarEdu() {
	for (var i = 0; i < previewEdu.length; i++) {
		previewEdu[i].innerHTML = camposEdu[i].value;
	}
	return camposEdu.value;
}
//





var camposMore = document.querySelectorAll('.other-fields');
var previewMore = document.querySelectorAll('.prev-other');
var btnSaveMore = document.querySelector('.save-other');

function rellenarMore() {
	for (var i = 0; i < previewMore.length; i++) {
		previewMore[i].innerHTML = camposMore[i].value;
	}
	return camposMore.value;
}

btnSavePersonal.addEventListener('click', rellenarPersonal);
btnSaveJob.addEventListener('click', rellenarJobs);
btnSaveEdu.addEventListener('click', rellenarEdu);
btnSaveMore.addEventListener('click', rellenarMore);

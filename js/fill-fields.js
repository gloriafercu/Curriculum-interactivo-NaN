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

var camposJob = document.querySelectorAll('.job-fields');
var previewJob = document.querySelectorAll('.prev-job');
var btnSaveJob = document.querySelector('.save-job');

function rellenarJobs() {
	for (var i = 0; i < previewJob.length; i++) {
		previewJob[i].innerHTML = camposJob[i].value;
	}
	return camposJob.value;
}

var camposEdu = document.querySelectorAll('.edu-fields');
var previewEdu = document.querySelectorAll('.prev-edu');
var btnSaveEdu = document.querySelector('.save-edu');

function rellenarEdu() {
	for (var i = 0; i < previewEdu.length; i++) {
		previewEdu[i].innerHTML = camposEdu[i].value;
	}
	return camposEdu.value;
}

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

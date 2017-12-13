'use strict';

var camposDatos = document.querySelectorAll('.personal-fields');
var previewDatos = document.querySelectorAll('.prev-contactdetails');


function rellenarPersonal() {
	for (var i = 0; i < previewDatos.length; i++) {
		previewDatos[i].innerHTML = camposDatos[i].value;
		console.log("Entro en el for");
	}
	return camposDatos.value;
}

// RELLENAR Y AÑADIR EXPERIENCIA PROFESIONAL

var buttonAddJob = document.querySelector('.add-job');

function saveNewJobs() {
	var addJob = '<li class="prev-jobdetails-job"><p class="camps-titles">Puesto de trabajo:</p> <span id="trabajo" class="prev-job">' + document.getElementById('job').value + '</span></li>' + '<li class="prev-jobdetails-charge"><p class="camps-titles">Cargo:</p> <span id="cargo" class="prev-job">' + document.getElementById('job-charge').value+ '</span></li>' + '<li id="jobdetails-company" class="prev-jobdetails-company"><p class="camps-titles">Empresa:</p> <span id="empresa" class="prev-job">' + document.getElementById('job-bussines').value + '</span></li>' + '<li class="prev-jobdetails-date"><ul class="prev-jobdate"><li id="jobdate-start" class="prev-jobdate-start"><p class="camps-titles">Fecha de inicio:</p> <span id="inicio-mes" class="prev-job">' + document.getElementById('job-month-start').value +
	'</span>/<span id="inicio-año" class="prev-job">' + document.getElementById('job-year-start').value +
	'</span class="prev-job"></li><li id="jobdate-end" class="prev-jobdate-end"><p class="camps-titles">Fecha de final:</p> <span id="fin-mes" class="prev-job">' +
	document.getElementById('job-month-end').value +
	'</span>/<span id="fin-año" class="prev-job">' + document.getElementById('job-year-end').value +
	'</span></li>'+
	'<li class="prev-jobdetails-description"><p class="camps-titles">Descripción del cargo:</p> <span id="descripcion-trabajo" class="prev-job">' + document.getElementById('job-extract').value +
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
	var moreEducation = '<li id="educationdetails-studies" class="prev-educationdetails-studies"><p class="camps-titles">Titulación:</p> <span id="titulacion" class="prev-edu">' + document.getElementById('education-studies').value + '</span></li><li id="educationdetails-type-studies" class="prev-educationdetails-type-studies"><p class="camps-titles">Tipo de estudios:</p> <span id="tipo-estudios" class="prev-edu">'+ document.getElementById('education-type-studies').value + '</span></li><li id="educationdetails-centre" class="prev-educationdetails-centre"><p class="camps-titles">Centro de estudios:</p> <span id="centro" class="prev-edu">'+ document.getElementById('education-institution').value +'</span></li><li class="prev-educationdetails-date"><ul class="prev-educationdate"><li id="educationdate-start" class="prev-educationdate-start"><p class="camps-titles">Año de inicio:</p><span>'
	+ document.getElementById('education-year-start').value +'</span></li><li id="educationdate-end" class="prev-educationdate-end"><p class="camps-titles">Año de finalización:</p><span id="año-fin" class="prev-edu">'
	 + document.getElementById('education-year-end').value + '</span></li></ul><li id="educationdetails-description" class="prev-educationdetails-description"> <p class="camps-titles">Descripción:</p> <span id="descripcion-estudios" class="prev-edu">' + document.getElementById('education-extract').value + '</span></li><br>'


	var container = document.querySelector('.prev-education');
	container.innerHTML += moreEducation;
	document.getElementById('education-studies').value="";
	document.getElementById('education-type-studies').value="";
	document.getElementById('education-institution').value="";
	document.getElementById('education-year-start').value="";
	document.getElementById('education-year-end').value="";
	document.getElementById('education-extract').value="";

}


buttonAddJob.addEventListener('click', saveNewJobs);
btnAddEdu.addEventListener('click', addMoreEducation);

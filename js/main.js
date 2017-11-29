"use strict"
function formJobs() {
    var indicateJobCharge = document.querySelector("#jobdetails-charge");
    var indicateJobCompany = document.querySelector("#jobdetails-company");
    var indicateJobDateStart = document.querySelector("#jobdate-start");
    var indicateJobDateEnd = document.querySelector("#jobdate-end");
    var indicateJobDescription = document.querySelector("#jobdetails-description");
    var currentMood = indicateJobCharge.innerHTML;
    indicateJobCharge.innerHTML= prompt("Cargo en la empresa");
    var currentMood = indicateJobCompany.innerHTML;
    indicateJobCompany.innerHTML= prompt("Nombre de la empresa");
    var currentMood = indicateJobDateStart.innerHTML;
    indicateJobDateStart.innerHTML= prompt("Fecha de inicio");
    var currentMood = indicateJobDateEnd.innerHTML;
    indicateJobDateEnd.innerHTML= prompt("Fecha de final");
    var currentMood = indicateJobDescription.innerHTML;
    indicateJobDescription.innerHTML= prompt("Descripción del puesto de trabajo:");
}
function ocultar(item){
document.querySelector("[id=" + item + "]").style.display = 'none';
}
// function closeForm(){
//
// document.querySelector(".boxfieldsetjob").style.display = 'none';
//
// }
function mostrar(item){
document.querySelector("[id=" + item + "]").style.display = 'block';
}
// var indicateEducationStudies = document.querySelector("#educationdetails-studies");
// var indicateEducationTypeStudies = document.querySelector("#educationdetails-type-studies");
// var indicateEducationCentre = document.querySelector("#educationdetails-centre");
// var indicateEducationDateStart = document.querySelector("#educationdate-start");
// var indicateEducationDateEnd = document.querySelector("#educationdate-end");
// var indicateEducationDescription = document.querySelector("#educationdetails-description");
// var currentMood = indicateEducationStudies.innerHTML;
// indicateEducationStudies= prompt("Titulación");
// var currentMood = indicateEducationTypeStudies.innerHTML;
// indicateEducationTypeStudies = prompt("Tipo de estudios");
// var currentMood = indicateEducationCentre.innerHTML;
// indicateEducationCentre.innerHTML= prompt("Centro de estudios");
// var currentMood = indicateEducationDateStart.innerHTML;
// indicateEducationDateStart.innerHTML= prompt("Año de inicio");
// var currentMood = indicateEducationDateEnd.innerHTML;
// indicateEducationDateEnd.innerHTML= prompt("Año de finalización");
// var currentMood = indicateEducationDescription.innerHTML;
// indicateEducationDescription= prompt("Descripción");



/*function desplegar(classContent) {
	document.querySelector(classContent).style.display = "block";
}

function closeForm(classContent) {
	document.querySelector(classContent).style.display = "none";
}

desplegar(".boxfieldsetjob");
closeForm(".boxfieldsetjob");*/

/*function formJobs() {
	var indicateJobCharge = document.querySelector("#jobdetails-charge");
	var indicateJobCompany = document.querySelector("#jobdetails-company");
	var indicateJobDateStart = document.querySelector("#jobdate-start");
	var indicateJobDateEnd = document.querySelector("#jobdate-end");
	var indicateJobDescription = document.querySelector("#jobdetails-description");
	var currentMood = indicateJobCharge.innerHTML;
	indicateJobCharge.innerHTML= prompt("Cargo en la empresa");
	var currentMood = indicateJobCompany.innerHTML;
	indicateJobCompany.innerHTML= prompt("Nombre de la empresa");
	var currentMood = indicateJobDateStart.innerHTML;
	indicateJobDateStart.innerHTML= prompt("Fecha de inicio");
	var currentMood = indicateJobDateEnd.innerHTML;
	indicateJobDateEnd.innerHTML= prompt("Fecha de final");
	var currentMood = indicateJobDescription.innerHTML;
	indicateJobDescription.innerHTML= prompt("Descripción del puesto de trabajo:");

}

function ocultar(item){

document.querySelector("[id=" + item + "]").style.display = 'none';
}
// function closeForm(){
//
// document.querySelector(".boxfieldsetjob").style.display = 'none';
//
// }
function mostrar(item){

document.querySelector("[id=" + item + "]").style.display = 'block';

}*/


// var indicateEducationStudies = document.querySelector("#educationdetails-studies");
// var indicateEducationTypeStudies = document.querySelector("#educationdetails-type-studies");
// var indicateEducationCentre = document.querySelector("#educationdetails-centre");
// var indicateEducationDateStart = document.querySelector("#educationdate-start");
// var indicateEducationDateEnd = document.querySelector("#educationdate-end");
// var indicateEducationDescription = document.querySelector("#educationdetails-description");


// var currentMood = indicateEducationStudies.innerHTML;
// indicateEducationStudies= prompt("Titulación");
// var currentMood = indicateEducationTypeStudies.innerHTML;
// indicateEducationTypeStudies = prompt("Tipo de estudios");
// var currentMood = indicateEducationCentre.innerHTML;
// indicateEducationCentre.innerHTML= prompt("Centro de estudios");
// var currentMood = indicateEducationDateStart.innerHTML;
// indicateEducationDateStart.innerHTML= prompt("Año de inicio");
// var currentMood = indicateEducationDateEnd.innerHTML;
// indicateEducationDateEnd.innerHTML= prompt("Año de finalización");
// var currentMood = indicateEducationDescription.innerHTML;
// indicateEducationDescription= prompt("Descripción");

"use strict"
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

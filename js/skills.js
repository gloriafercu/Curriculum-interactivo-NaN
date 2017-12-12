'use strict';

var skill = document.querySelector('#skillstext');
var skillName = document.querySelector('.skill-name');

var percentage = document.querySelector('#percentage');
var progress = document.querySelector('.progress-bar__item');
var barNone = document.querySelector('.progress-bar');
var buttonAdd = document.querySelector('#plus');
var listSkill = document.querySelector('.skill1');
var buttonAddDetails = document.querySelector('.add-detail')


function fillElement() {
	skillName.innerHTML += skill.value;
	return skillName;
}

function fillPercentage (){

		percentage.value = parseInt(percentage.value);
  if (percentage.value <= 100 ) {
    progress.style.width += percentage.value + '%';
  } else {
    progress.style.width += '0%';
  }
	barNone.classList.remove('hidden');
	return percentage;
}

function saveNewSkill() {
	var addSkill = '<li class="skill1"><p class="skill-name">' + document.getElementById('skillstext').value + '</p><div class="progress-bar"><div class="progress-bar__item" style="width:' +  document.getElementById('percentage').value  + '%"></div></div></li>';
	var newSkill = document.querySelector('.box-skills');
	newSkill.innerHTML += addSkill;
	document.getElementById('skillstext').value = '';
	document.getElementById('percentage').value = '';
	}


	function saveNewDetails() {
		var addDetail = '<li>' + document.querySelector('.other-fields').value + '</li>';
		var newDetail = document.querySelector('.prev-other');
		newDetail.innerHTML += addDetail;
		document.getElementById('details').value = '';

		}


buttonAdd.addEventListener('click', saveNewSkill);
buttonAddDetails.addEventListener('click', saveNewDetails);

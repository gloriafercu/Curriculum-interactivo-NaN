var colors = document.querySelectorAll('.color_option');
var previewLateral = document.querySelectorAll('.color-lateral');

function cleanColorClasses() {
	previewLateral.classList.remove('lateral-1', 'lateral-2', 'lateral-3');
}

function applyColorLateral(event) {
	var colorClass = event.currentTarget.getAttribute('data-theme-class')
	cleanColorClasses();
	previewLateral.classList.add(colorClass);
}
for (var i = 0; i < colors.length; i++) {
	colors[i].addEventListener('click', applyColorLateral);
}

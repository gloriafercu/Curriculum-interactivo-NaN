'use strict';
var colors = document.querySelectorAll('.color_option');
function cleanColorClasses() {
    var previewLateral = document.querySelectorAll('.color-lateral');
        for (var i = 0; i < previewLateral.length; i++) {
        previewLateral[i].classList.remove('theme1', 'theme2', 'theme3', 'color-base');
    }
}
function applyColorLateral(event) {
    cleanColorClasses();
    var previewLateral = document.querySelectorAll('.color-lateral');
    var themeClass = event.currentTarget.getAttribute('data-theme-class');
    for (var i = 0; i < previewLateral.length; i++) {
        previewLateral[i].classList.add(themeClass);
    }
}
for (var i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', applyColorLateral);
}
document.querySelector('.color_opcion').addEventListener('click', removeColorBase);
document.querySelector('.color_opcion').addEventListener('click', applyColorLateral);

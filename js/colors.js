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

/*Seleccion fuentes*/
var fonts = document.querySelectorAll('.font_option');
function cleanFontClasses() {
    var previewFont = document.querySelectorAll('.type-font');
        for (var x = 0; x < previewFont.length; x++) {
        previewFont[x].classList.remove('font1', 'font2', 'font3');
    }
}
function applyFont(event) {
    cleanFontClasses();
    var previewFont = document.querySelectorAll('.type-font');
    var fontClass = event.currentTarget.getAttribute('data-font-class');
    for (var x = 0; x < previewFont.length; x++) {
        previewFont[x].classList.add(fontClass);
    }
}

for (var x = 0; x < fonts.length; x++) {
    fonts[x].addEventListener('click', applyFont);
}
document.querySelector('.color_option').addEventListener('click', applyColorLateral);
document.querySelector('.font_option').addEventListener('click', applyFont);

'use strict'

/*$(document).ready(function () {
		$("input#imprime").on('click', function (ev) {
				CallPrint();
				clickimprime();
		});
});
function CallPrint() {
		var divToPrint = document.querySelector('cv');
		var newWin = window.open('width=100,height=100', '_blank');
		newWin.focus();
		newWin.document.open();
		newWin.document.write(divToPrint.innerHTML);
		newWin.document.close();
		setTimeout(function () { newWin.close(); }, 10);
}
function clickimprime() {
		$("preview").click();
}*/

function vistaprevia () {
	var prtContent = document.getElementById("printcv");
	var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
	WinPrint.document.write(prtContent.innerHTML);
	WinPrint.document.close();


}


function imprimir() {
	var prtContent = document.getElementById("printcv");
	var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0');
	WinPrint.document.write(prtContent.innerHTML);
	WinPrint.document.close();
	WinPrint.focus();
	WinPrint.print();
	WinPrint.close();

}

var btnPreview = document.querySelector('.preview');
btnPreview.addEventListener('click', vistaprevia);
var btnPrint = document.querySelector('.print');
btnPrint.addEventListener('click', imprimir);

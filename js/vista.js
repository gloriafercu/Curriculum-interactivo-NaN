'use strict'

function vistaprevia() {
	var request = new XMLHttpRequest(); //hacemos la petición con AJAX
	request.open('GET', 'styles/style.css'); // abrimos la pentición (es de tipo GET y le podemos asignar tanto una URL absoluta como relativa)
	request.addEventListener('load', abrirVistaPrevia); //(evento para que llame a abrirVistaPrevia cuando la petición cargue)

	function abrirVistaPrevia() {
		var estilo = request.responseText; //variable que creamos dnd se genera el callback de la petición).
		var prtContent = document.getElementById("printcv").innerHTML; //variable dnd seleccionamos la sección de HTML a la que queremos aplicar nuestra función.

		var WinPrint = window.open('', '', 'left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0'); //generamos una ventana emergente y le damos dimensiones...
		if (WinPrint != null) {
			WinPrint.document.write('<html>');
			WinPrint.document.write('<head><style type="text/css">' + estilo + '</style></head>');
			WinPrint.document.write('<body>');
			WinPrint.document.write(prtContent);
			WinPrint.document.write('</body>');
			WinPrint.document.write('</html>');
			WinPrint.document.close();
		} else {
			alert('Activa los pop-ups, alma cándida');
		} // condicional para comprobar si el bloqueo de pop-ups está activado y aviso de desactivarlo en caso afirmativo
	}

	request.send(); //envío de la petición
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

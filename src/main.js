let correctas = [1,2,2];

let opcion_elegida= [];

function respuesta(num_pregunta,seleccionada){

	opcion_elegida[num_pregunta] = seleccionada.value;

	id="p" + num_pregunta;

	labels = document.getElementById(id).childNodes;
}

function MostrarResultado(){

	let cantidad_correctas = 0 ;

	for( i=0; i < correctas.length; i++) {
		if(correctas[i] == opcion_elegida[i]){
			cantidad_correctas++;
		}
	}
	document.getElementById("resultado").innerHTML= cantidad_correctas;
}

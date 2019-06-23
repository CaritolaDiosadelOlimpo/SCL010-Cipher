// // Fuente: https://www.youtube.com/watch?v=CUNlmf1sx1o

// var numeros = [1,2,3,4,5];
// // var hola = "hofdsfdsfla";

// // console.log(hola)
// // console.log(1231231)
// // console.log("hola: " + numeros)
// console.log("numeros: "+numeros)

// // numeros_2 = numeros.map( function(xxx){return xxx+1} )
// var numeros_2 = numeros.map( (xxx) => xxx+1 );

// console.log()
// console.log("numeros_2: "+numeros_2)

// function sumarUno(n){
// 	var aux = 1
// 	// console.log("topo")
// 	return n+aux
// }

// console.log()
// console.log(sumarUno(-4))



// var numeros_3 = numeros.map( function(yyy){return sumarUno(yyy)} );
// console.log()
// console.log("numeros_3: "+numeros_3)


// // funciones flechas que no estan dentro de otra función
// // function multiplicar(a,b){
// // 	return a*b
// // }
// var fun_multiplicar = (a,b) => a*b;
// // var fun_multiplicar = multiplicar

// console.log()
// // console.log(multiplicar(2,3))
// console.log(fun_multiplicar(2,3))


// // --------------------------------------------------------------------------

// // 'debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33'
// // function encode(texto, offset){

// // 	return texto_codificado
// // }



// // 'debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33'

// // offset 2

// // text = "FRUTIZ" => "HTWVKB"

// // text = "SANDI" => "UCOFK"

// // text = "BORIS" => "G"



// // ---------------------------------------------------------------------------





// var encode = (texto_a_codificar, offset) => {
// 	console.log("---------------------------")
// 	console.log()
// 	console.log()
// 	console.log("texto_a_codificar: "+texto_a_codificar)
// 	console.log(typeof texto_a_codificar)
// 	var texto_splitiado = texto_a_codificar.split("");
// 	console.log()
// 	console.log("texto_splitiado: "+texto_splitiado)
// 	console.log(typeof texto_splitiado)


// 	console.log()
// 	var aux_map_split = texto_splitiado.map(function(letra){return String.fromCharCode( (letra.charCodeAt(0)-65+offset)%26+65) });
// 	console.log("aux_map_split: "+aux_map_split)
// 	console.log(typeof aux_map_split)

// 	var resultado = aux_map_split.join().replace(/,/g, "");
// 	console.log()
// 	console.log("resultado: "+resultado)//lo que esta entre comillas es un string y no una variable 
// 	console.log(typeof resultado)


// 	console.log("---------------------------")

// }


console.log()

function codificacion_Cesar(texto_a_codificar, offset) {
	console.log("texto_a_codificar", "offset")//lo que esta entre ()es la variable y si esta entre comillas es solo un string
	console.log(texto_a_codificar, offset)//lo que esta entre ()es la variable y si esta entre comillas es solo un string

	// //compusandilli analiza desde la primera letra del string que te di
	//  compusandilli utiliza el codigo ascii
 // //    
 	//var variable = Array.from('texto_a_codificar');
 		// var arrayDeString = Array.from(texto_a_codificar); //para tranformar un string a un array
 		// console.log(arrayDeString)
 		// console.log()

	var text = "";
	var i;
	var resultado = []

	// para cada letra:
	for (i = 0; i < texto_a_codificar.length ; i++) {	// tomamos cada letra del string de izquierda a derecha
	  	//console.log(i + " - " +arrayDeString[i] + " - " + 
	  		//texto_a_codificar.charCodeAt(i) + " - " + arrayDeString[i].charCodeAt(0));

	  		var posicionEnCodigoAscii = texto_a_codificar.charCodeAt(i);	// A 65		//con esta letra, vemos cual es su equivalente en ascii dex
	  		var posicionEnCodigoDiccionario = posicionEnCodigoAscii - 65;	// A 0		// con este equivalente, obtenemos su posicion en el diccionario, lo que se logra restando 65
	  		var posicionLetraCodificada = (posicionEnCodigoDiccionario + offset)%26;	//ya que sabemos la posicion de nuestra letra en el diccionario, le sumanos el offset para saber la posición de la letra en su version codificada, ojo que hay que considerar el caso en que la suma de a 
	  		var posicionEnCodigoAsciiCodificado = posicionLetraCodificada +65;	//con esta nueva posicion, le volvemos a + 65 para obtener el numero qeu representa en codigo ascci la nueva letra que sería la letra codificada de la letra que tomamos al principio

	  		var letraCodificada = String.fromCharCode(posicionEnCodigoAsciiCodificado);	//con este numero, obtenemos su representación en letra
	  		console.log(letraCodificada)
	  		resultado = resultado.concat(letraCodificada);	//con esta letra, la guardamos para usarla con el resto de las otras letras CODIFICADAS
	}

	console.log(resultado)
	resultado = resultado.join().replace(/,/g, "");		//usando todas las letras que conseguimos CODIFICADAS, las juntamos, y quitamos elementos que nos nos interesan (como las comas), siendo este el resultado (una palabra que corresponde a la union de todas las letras CODIFICAAS que hemos conseguido)
	console.log(resultado)
	return  resultado; 
}



console.log(codificacion_Cesar("paralelepipedo", 15))




// // var fun_multiplicar = (a,b) => a*b;		// esta variable esta definida igual que la de abajo
// var encode = (texto_a_codificar, offset) => texto_a_codificar.split("").map(function(letra){return String.fromCharCode( (letra.charCodeAt(0)-65+offset)%26+65) }).join().replace(/,/g, "");







// // console.log( encode("FRUTILLITA", 12) )
// console.log( encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 33) )



// var ejemplo = "FRUTILLITA".charCodeAt(0)
// var ejemplo2 = "FRUTILLITA".charCodeAt(4)	// esta funcion recibe como input la posicion del string, para si obtener la codificacion decimal de la letra en esa posicion dentro del string

// console.log()
// console.log("ejemplo: "+ejemplo)
// console.log("ejemplo2: "+ejemplo2)


// console.log()
// console.log()
// console.log(1)
// console.log(27-26)
// console.log(53-26*2)
// console.log()
// console.log(1%26)
// console.log(27%26)
// console.log(53%26)



// console.log()
// console.log()
// console.log( String.fromCharCode(65) )












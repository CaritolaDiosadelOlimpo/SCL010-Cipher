


window.cipher = {
 encode: (texto_a_codificar, offset) => {
   /* Acá va tu código */
	// String original
					//	transformar a un array
								// recorre cada elemento del array anterior (cada elemento es una letra del string original)
													// (dentro de la función map) lo que hace map, es que para cada letra del strin orignial, nos da su letra equivalente codificada 
															//String.fromCharCode transforma un numero (en decimal) a su equivalente en letra según el codigo ASCII
																					//charCodeAt toma el primer elemento del arry (array es una letra del strin original, ej: ["A"]) y lo transforma a su equivalente numerico decimal según el codigo ASCCI (["A"] => 65)
																								// se le resta 65 para encontrar así la posicion de esta letra en el DICCIONARIO IMPUESTO para el proyecto
																										// lo anterior se hace, para poder sumar el OFFSET y así saber cual es la posicion DE LA LETRA CODIFICADA
																												//%26 (se le saca el resto de 26) por que el usuario podría dar un OFFSET mayor a 26, y con esta operación le decimos al computaor que vuelva a recorrer el diccionario impuesto desde su principio(letras en mayuscula y no incluye la ñ)
																													// se vuelve a sumar 65, ya que debemos transformar esta poiscion en el diccionaro a letra, PERO EL NUMERO DEBE REPRESENTAR EL NUMERO DECIMAL en el codigo ascii

																													// -------------------------
																													// ya salimos del map y obetenemos un array con las letras codificadas según el cidogo cesar
																															//join toma el array codifcado y lo transofmroar a un STIRNG
																																	//replace quita las comas en el string resultado
   return texto_a_codificar.split("").map(function(letra){return String.fromCharCode( (letra.charCodeAt(0)-65+offset)%26+65 ) }).join().replace(/,/g, ""); 
  

 },
 decode: (texto_a_codificar, offset) => {
   /* Acá va tu código */
  return texto_a_codificar.split("").map(function(x){return (String.fromCharCode((x.charCodeAt(0)-65-(offset%26)+26)%26+65)) }).join().replace(/,/g, "");
	// se obtiene el numero menor a 26 que se le debe restar a la posicion de la letra para obtener la posicion de la letra decodificada
				//+26 no me quita ni me pone
 }
}




// function ocultarCategoria(){
// 	document.getElementById("tematica").style.display = "none";
// 	document.getElementById("preguntasMonitos1").style.display ="block";
// }


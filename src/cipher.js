window.cipher = {
 encode: (texto_a_codificar, offset) => {
   /* Acá va tu código */
   return texto_a_codificar.split("").map(function(letra){return String.fromCharCode( (letra.charCodeAt(0)-65+offset)%26+65) }).join().replace(/,/g, "");
 },
 decode: (texto_a_codificar, offset) => {
   /* Acá va tu código */
  return texto_a_codificar.split("").map(function(x){return (String.fromCharCode((x.charCodeAt(0)-65-(offset%26)+26)%26+65)) }).join().replace(/,/g, "");
 }
}




// function ocultarCategoria(){
// 	document.getElementById("tematica").style.display = "none";
// 	document.getElementById("preguntasMonitos1").style.display ="block";
// }


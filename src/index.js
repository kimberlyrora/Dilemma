let getYou = document.getElementById("traduccion").value;
let buttonCifrar=document.getElementById("cifrar");
buttonCifrar.addEventListener("click", function () {
  let off =parseInt(document.getElementById("offset").value);
  const inputTexto =document.getElementById("original").value.toUpperCase();
  const cifrar =cipher.encode(off,inputTexto);
  document.getElementById("traduccion").value=cifrar
});

let esDomingo = document.getElementById("traduccion").value;
let buttonDescifrar=document.getElementById("descifrar");
buttonDescifrar.addEventListener("click", function () {
  let off =document.getElementById("offset").value;
  const inputTexto2 =document.getElementById("original").value.toUpperCase();
  const descifrar =cipher.decode(off,inputTexto2);
  document.getElementById("traduccion").value=descifrar
});


/* let getYou = document.getElementById("traduccion").value;
let buttonDescifrar=document.getElementById("descifrar");

buttonDescifrar.addEventListener("click", function() {
      let inputTexto2 =document.getElementById("original").value.toUpperCase();
  let off =document.getElementById("offset").value;
getYou.innerHTML(decode);
})
*/

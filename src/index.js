let buttonCifrar=document.getElementById("cifrar");
buttonCifrar.addEventListener("click", () => {
  let offset =parseInt(document.getElementById("offset").value);
  let string =document.getElementById("original").value.toUpperCase();
  const cifrar = cipher.encode(offset,string);
  document.getElementById("traduccion").value=cifrar
});

let buttonDescifrar=document.getElementById("descifrar");
buttonDescifrar.addEventListener("click", () => {
  let offset = parseInt(document.getElementById("offset").value);
  let string =document.getElementById("original").value.toUpperCase();
  const descifrar =cipher.decode(offset,string);
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

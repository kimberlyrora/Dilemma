window.cipher = {
  encode:
  const buttonCifrar =document.getElementById("cifrar");
function ojalaFuncione(hello,off){
  let vacio="";
 for (let i = 0; i < hello.length; i ++) {
    let numerAscii = hello.charCodeAt(i);
    let cifrado=String.fromCharCode((numerAscii-65+off)%26+65);
vacio = vacio + cifrado
}
  let ayay=document.getElementById("cifrar");
  let gh = document.getElementById("traduccion").value= vacio;
}
buttonCifrar.addEventListener("click", function() {
  let inputTexto =document.getElementById("original").value.toUpperCase();
  let off =document.getElementById("offset").value;
    ojalaFuncione(inputTexto,off);
})
};
window.cipher ={
  decode:
  const buttonDescifrar=document.getElementById("descifrar");
function ayuda(adio, off){
  let vacioo ="";
 for(let i = 0; i < adio.length; i++) {
   let numerAscii=adio.charCodeAt(i);
   let cifrado=String.fromCharCode((numerAscii+65-off)%26+65);
vacioo = vacioo + cifrado
}
  let desci=document.getElementById("descifrar");
  let getYou = document.getElementById("traduccion").value= vacioo;
}
buttonDescifrar.addEventListener("click", function() {
  let inputTexto2 =document.getElementById("original").value.toUpperCase();
  let off =document.getElementById("offset").value;
    ayuda(inputTexto2,off);
})
};

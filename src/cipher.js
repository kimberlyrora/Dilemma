window.cipher = {
encode: encode_,
decode: decode_,
}
function encode_(off, adio){
  let cifrado=[];
  let numerAscii=[];
  let cifrado_cadena='';
 for(let i = 0; i < adio.length; i++) {
    numerAscii.push(adio.charCodeAt(i));
    cifrado.push(String.fromCharCode((numerAscii[i]-65+off)%26+65));
 }
 cifrado_cadena=cifrado.join('');
return cifrado_cadena;
}

 function decode_(off, adio) {
  let descifrado =[];
  let numerAsciii=[];
  let descifrado_cadena='';
 for(let i = 0; i < adio.length; i++) {
   numerAsciii.push(adio.charCodeAt(i));
   descifrado.push(String.fromCharCode((numerAsciii[i]+65-off)%26+65));
}
descifrado_cadena=descifrado.join('');
return descifrado_cadena;
  }

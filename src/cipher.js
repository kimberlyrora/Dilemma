
const encode = (offset,string) => {
  let cifrado=[];
  let numerAscii=[];
  let cifrado_cadena='';
  for(let i = 0; i < string.length; i++) {
    numerAscii.push(string.charCodeAt(i));
    cifrado.push(String.fromCharCode((numerAscii[i]-65+offset)%26+65));
  }
  cifrado_cadena = cifrado.join('');
  return cifrado_cadena;
}

const decode = (offset, string) => {
  let descifrado =[];
  let numerAsciii=[];
  let descifrado_cadena='';
 for(let i = 0; i < string.length; i++) {
   numerAsciii.push(string.charCodeAt(i));
   descifrado.push(String.fromCharCode((numerAsciii[i]+65-offset)%26+65));
  }
  descifrado_cadena=descifrado.join('');
  return descifrado_cadena;
}

window.cipher = {
  encode: (offset, string) => {
    return encode(offset, string)
  },
  decode: (offset, string) => {
    return decode(offset, string)
  },
}
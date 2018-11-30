
const encode = (offset,string) => {
  let cifrado=[];
  let cifrado_cadena='';
  for(let i = 0; i < string.length; i++) {
    let numerAscii=[];
    numerAscii.push(string.charCodeAt(i));
    if(numerAscii !=32 && numerAscii>=65 && numerAscii <=90){
      cifrado.push(String.fromCharCode((numerAscii-65+offset)%26+65));
      }
      
    //else if (numerAscii>=122 || numerAscii<=65){
     else   cifrado.push(string[i]);
     // }
  }
  cifrado_cadena = cifrado.join('');
  return cifrado_cadena;
}

const decode = (offset, string) => {
  let descifrado =[];
  let descifrado_cadena='';
 for(let i = 0; i < string.length; i++) {
  let numerAsciii=[];
  numerAsciii.push(string.charCodeAt(i));
    if(numerAsciii !=32 && numerAsciii>=65 && numerAsciii <=90){
    descifrado.push(String.fromCharCode((numerAsciii-90-offset)%26+90));
    }
    
    //else if (numerAsciii>=122 || numerAsciii<=65){
    else  descifrado.push(string[i]);
    //}
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
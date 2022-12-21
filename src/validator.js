const validator = {
  
//  funcion para enmascarar
 maskify: function(tarje){
  const tarjeta = array.from(tarje);
  // condicion para que la tarjeta mayor a 4 digitos se enmascare
  if (tarjeta.length>4){
    for(let i=0; i<tarjeta.length-4; i++){
      tarjeta[i]="#";
    }
    // transformar el  array a string
   return tarjeta.join(''); 
  } else{
    return tarjeta.join('');
  }

 },








  // Traer el imput del numero de tarjeta
  isValid : function numerotarjeta(ccNumber){
  // voltear los dijitos y convertir a array 

  const ccReversed = ccNumber.split("").reversed().map(Number); 
  // crear variables para la suma
   let addEven = 0;
   let addodd = 0;
  // Funcion for para poder realizar los calculos
  for (let i=0; i<ccReversed.length; i++){
  // para numero en posicion par
    if(i % 2 !== 0){
    // si la multiplicacion es de dos sifras
      if(ccReversed[i] * 2 > 9){
        addEven  += ccReversed[i]* 2 - 9;
      // si la multiplicacion es de una cifra
      } else{
          addEven += ccReversed[i] * 2;
      }
    // para numero en posicion impar
    } else{
       addodd += ccReversed[i];
    }
  }
//  retorna i es valido o no (t/f)
return (addEven + addEven) % 10 === 0
  }
, maskify : function hideNumber(ccNumber) {
// suficiente con el remplace [0-9].
const maskify = cc => cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);



}
}
  //luego descomentar la linea de arriba
 
export default validator;
// // crear una funcion isvali
// isVali : Function valTargeta(ccNumber){
//   // girar los digitos y pasarlo a array

// }
// let newfinalizarBoton = (Array.from(finalizarBoton));
//  let reverseTarg = ccNumber, reverse().map(x=> parseInt(x));
//  let resul =0;
//  for (let i = 0; i % 2 ===0){
//   if ( i===0 || i % 2 ===0){
//      let noMultiply = (reverseTarg[i]);
//      resul +=noMultiply;
//     } else {
//       let multiply = (reverseTarg[i] * 2);
//       if (multiply >= 10) {
//         result += multiply - 9;
//       }
//     }


// }

 

//  }

// */






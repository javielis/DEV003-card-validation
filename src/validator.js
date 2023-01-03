const validator = {
  
  //  funcion para enmascarar dentro de mi parentesis va un parametro( es lo que necesito aplicarle la funcion)
  maskify: function(tarje){
    const tarjeta = Array.from(tarje);
    // condicion para que la tarjeta mayor a 4 digitos se enmascare
    if (tarjeta.length>4){ //if lee el largo de mi tarjeta
      for(let i=0; i<tarjeta.length-4; i++){ // con el -4 q comience a contar de atras para delante 
      // si este es mayor q 4 se enmascara los 4 numeros menos el restante (i++ = es para q de un espacio a la ves)
        tarjeta[i]="#";// aqui digo q solo los numeros i se cambien por #
        const tarje = parseInt(tarje[i]);
      }
      // transformar el  array a string
      return tarjeta.join(''); // este es para q la pase como una cadena de numero [1,2,3]'123' asi me qdaria
    } else{
      return tarjeta.join('');// si la tarjeta no es mayor a 4 no quiero q le haga nada si no solo regrese la tarjeta
    }

  },
  // aqui comenzara el isValid


}


export default validator;









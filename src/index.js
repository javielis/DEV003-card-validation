
//import validator from './validator.js';

//console.log(validator);



// pantalla 1
// para que se muestre mi primera pantalla y las demas se oculten

function Inicio(){
  document.getElementById("Inicio").style.display= "block";
  document.getElementById("Parte1").style.display= "none";
  document.getElementById("Parte2").style.display= "none";
  console.log("Inicio");
} 
Inicio()
  
const bienvenidosBoton= document.getElementById("botonInicio");
 
// console.log(bienvenidosBoton)
// // con estoy le doy evento que quiero a mi boton 

bienvenidosBoton.addEventListener("click",Inicio);
bienvenidosBoton.addEventListener("click",Parte1);

// pantalla 2
function Parte1(){

  document.getElementById("Inicio").style.display= "none";
  document.getElementById("Parte1").style.display= "block";
  document.getElementById("Parte2").style.display= "none";
  console.log (Parte1);
}  

const continuarBoton=document.getElementById("botonSeccion1");

continuarBoton.addEventListener("click",Parte1);    
continuarBoton.addEventListener("click",Parte2);

 
//   para que acepte solo letras
 
// pantalla 3 para datos de tarjeta
  
function Parte2(){
    
  
  document.getElementById("Inicio").style.display= "none";
  document.getElementById("Parte1").style.display= "none";
  document.getElementById("Parte2").style.display= "block";
  console.log("Parte2");
  // const numtar = document.getElementById("numeroTarjeta").value;
  const botonfin = document.getElementById("BotonSeccion2");


           
  // const numerotarjeta = (prompt("Ingresa el número de tarjeta"));
  // console.log(numerotarjeta);
  botonfin.addEventListener("click", (e) => {//aqui le estamos dando un evento a mi boton
    e.preventDefault();// para q mi pagina no se recargue nuevamente 
    console.log(document.getElementById("numeroTarjeta").value);// para que comience a mostrarse en la consola 

    //  primero tebgo que jalar el valor de mi tarjeta de mi html a index.js.
    const valortarje = document.getElementById("numeroTarjeta").value;
    //tengo que aplicarle la funcion a mi valor de tarjeta.
    function isValid(tarje){
      const tarjeta = Array.from(tarje);// convertido en array
      const revers = (tarjeta.reverse());// aqui lo que queremos es que nuestro Array se voltee
      console.log(revers);
      // multiplicar por 2 los numeros en posiciones pares.
      const reverPar = [];
      for(let i=0; i<revers.length; i++){
        if(i%2!==0){
          let pares = (revers[i]*2); //Los elementos de mi array revers 
          if(pares>9){// si mi multiplicacion de impares da mayor a 9  
            pares = (pares-9);
            reverPar.push(pares)

          }else{
            reverPar.push(pares)// para guardar mis array
          }
        }
      }
      console.log(reverPar);
      const reverImpar = [];
      for (let i=0; i<revers.length;i++){
        if(i%2===0){
          const impares = (revers[i]*1);
          reverImpar.push(impares)
        }
      }
      console.log(reverImpar);
      const sumaTo =  reverPar.concat(reverImpar);//aqui ya lo junte o agrupe todos uno al lado de otro 
      console.log(sumaTo)
      let sumaFinal = 0;
      for(const n of sumaTo){
        sumaFinal +=n;
      }
      console.log(sumaFinal);
 
      if (tarje.length >= 13 &&tarje.length <= 16 && sumaFinal%10===0){
        return true
      }else{
        return false   
      }
     
      
    }
    const resultado = isValid(valortarje);
    console.log(resultado);
    if (resultado === true){
      alert("Su tarjeta es válida")
    }else{ 
      alert("Su tarjeta no es válida")
    }
    
  }
  )
  

}


      

 

//     const numeroTarjeta = document.getElementById("numeroTarjeta").value; // aqui comenzamos el llamado de validator a index, 
//     const resultado = validator.maskify(numeroTarjeta);//creamo una constante q se llama resultado q mostrara y aplicara el maskify q esta dentro de validecto. que viene siento mi objeto
//     console.log(resultado)
//     const reversa = validator.isValid(numeroTarjeta);// aplicamos lareversa del mismo modo se llamaria, y se crea una constante llamada reversa.
//     console.log(reversa)
     
  
  






// tengo que ver el resultado en la consola.
//  tebgo que estructurar mi funcion.
// para poder ver en la consola que esta funcionando
//  return "tarjeta " + (tarje)
      
// que todos los numeros que se encuentren en posicion pares multiplicarlo por 1 , 2, 3 ,4 
// si estos numero son mayor o igual a 10 debemos sumar los digitosdel resultado
// para que sea el numero valido la suma de sus digitos finales tiene que ser multiplo de 10.
      
    
    
    

  
//     console.log(isValid(11111));

//   // function saludo(nombre){
//   //   return "hola " + nombre
//   // }

  

// const resultado = saludo("Javielis");
// console.log(resultado); 






/*  
  function Parte3(){



  document.getElementById("Inicio").style.display= "none";
  document.getElementById("Parte1").style.display= "none";
  document.getElementById("Parte2").style.display= "none";
  document.getElementById("Parte3").style.display= "block";
}
  let graciasBoton =document.getElementById("BotonSeccion2");
  
  graciasBoton.addEventListener("click",(Parte3),console.log("tercera parte"))
  finalizarBoton.addEventListener("click",(Inicio),console.log("aqui debera de comenzar la validacion no el inicio"))

*/


// numeroTarjeta.preventDefault();



// let   titular=document.getElementById("BotonSeccion2")
// let expiracion=document.getElementById("BotonSeccion2")
// let cvv=document.getElementById("BotonSeccion2")
      

 
 
  

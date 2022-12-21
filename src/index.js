
import validator from './validator.js';




console.log(validator);



// pantalla 1
// para que se muestre mi primera pantalla y las demas se oculten
 function Inicio(){
   document.getElementById("Inicio").style.display= "block";
   document.getElementById("Parte1").style.display= "none";
  document.getElementById("Parte2").style.display= "none";
  console.log("Inicio");
} 
Inicio()
  
 let bienvenidosBoton= document.getElementById("botonInicio");

// console.log(bienvenidosBoton)
// // con estoy le doy evento que quiero a mi boton 

  bienvenidosBoton.addEventListener("click",Inicio);
  bienvenidosBoton.addEventListener("click",Parte1);

    // pantalla 2
   function Parte1(){

   document.getElementById("Inicio").style.display= "none";
   document.getElementById("Parte1").style.display= "block";
   document.getElementById("Parte2").style.display= "none";
   console.log(Parte1);
 }  

   let continuarBoton=document.getElementById("botonSeccion1");

   continuarBoton.addEventListener("click",Parte1);    
   continuarBoton.addEventListener("click",Parte2);

 
//   para que acepte solo letras
 
  // pantalla 3 para datos de tarjeta
  function Parte2(){
    
  
  document.getElementById("Inicio").style.display= "none";
  document.getElementById("Parte1").style.display= "none";
  document.getElementById("Parte2").style.display= "block";
  console.log("Parte2");
  const numtar = document.getElementById("numeroTarjeta").value;
  const botonfin = document.getElementById("BotonSeccion2");


  
  // const numerotarjeta = (prompt("Ingresa el número de tarjeta"));
  // console.log(numerotarjeta);
  botonfin.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(document.getElementById("numeroTarjeta").value);
    


    
    // const reverser= ccNumber.split("");
    // console.log((arrayTarjeta).value);
    // const reversernumerotarjeta = arrayTarjeta.reverse();
    // console.log(reversernumerotarjeta);
   
}
 
   )
  }

  
// esta seria una siguien funcion que quiero darle a mi boton
  // let finalizarBoton=document.getElementById("botonSeccion2");

   
//   // const botonfin = document.getElementById("BotonSeccion2");
//  botonfin.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(numtar);
//  })
 // finalizarBoton.addEventListener("click",Parte2);

    // finalizarBoton.addEventListener("click",Parte2);
    //  finalizarBoton.addEventListener("click",numerotarjeta);

   


  //  console.log("aqui debera de comenzar la validacion no el inicio"))

  // e.preventDelfault();
  // tarjeta()
  /* function (){
    let numerotarjeta=document.getElementById("numerotarjeta").value;
    console.log(numerotarjeta)
  }
*/

     //  aqui tomaremos el numero de tarjeta del imput para convertirlo 
     // let arrayNumerotarjeta=Numerotarjeta.split('');
    // console.log(arrayNumerotarjeta);  














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
      

 
 
  









/*
    Inicio.addEventListener("click", Bienvenidos);

    // Segunda da pantalla Aqui deberia salir una segunda pantalla pidiendo el nombre y apellido de quien cobra 
      
function Parte1(){
      document.getElementById("Inicio").style.display= "none";
      document.getElementById("Parte1").style.display= "block";
      document.getElementById("Parte2").style.display= "none";
    }     
      Parte1()
let Continuar= document.getElementById("BotonSeccion1")
     Parte1.addEventListener("click", Continuar);


function Parte2(){
    document.getElementById("Inicio").style.display= "none";
    document.getElementById("Parte1").style.display= "none";
    document.getElementById("Parte2").style.display= "block";
} 
    Parte2()
let Iniciar= document.getElementById("BotoSeccion2")
Parte1.addEventListener("click", Iniciar);   

    //  debo colocar aqui la funcion de 
    //  function Sololetras(e)
//    {key=e.keyCode || e.which;
    // tecla= String.fromCharCode(key).toString();
    // letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    //  if(letras.indexOf(tecla) == -1 && !tecla_especial) ;
// { 
    // alert("Ingrese solo letras");
    // return false;
// }
   
   function Parte2(){
    document.getElementById("Inicio").style.display= "none";
    document.getElementById("Parte1").style.display= "none";
    document.getElementById("Parte2").style.display= "block";
   
let Parte2= document.getElementById("Parte2");
   Parte2.addEventListener("click", Iniciar);
   
  
   }
//   para que acepte solo letras
   function Parte1(e)
{

 key = e.keyCode|| e.which;
 teclado = String.fromCharCorde(Key).toString();
 letras =" abcdefghijklmnñopqrstuvwxyz";
 especiales ="164";
 teclado_especial = false;

 for(var i in especiales){
   inf(key==especiales)[i]{
     teclado_especial=true;break;

   }
 }
 if(letras.indexOf(teclado)== -1 && !teclado_especial){
   return false;
 }
<label type="text"nombre="letras" onkeypress="return Parte1(event)"/>
}



*/
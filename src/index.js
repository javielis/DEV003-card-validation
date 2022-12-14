
import validator from './validator.js';

console.log(validator);


// colocamos el inicio hacer que lea el nombre de la empresa y presione el boton inicio.
// pantalla 1

function Inicio(){
    document.getElementById("Inicio").style.display= "block";
    document.getElementById("Parte1").style.display= "none";
    document.getElementById("Parte2").style.display= "none";
}  
Inicio()
  
  let bienvenidosBoton= document.getElementById("BotonInicio")
  // console.log("hola")
//  console.log(bienvenidosBoton)


   bienvenidosBoton.addEventListener("click",(Inicio),console.log("diste click"))
   bienvenidosBoton.addEventListener("click",(Parte1)),console.log ("comienza la bienvenida")

  // pantalla 2
  function Parte1(){

  document.getElementById("Inicio").style.display= "none";
  document.getElementById("Parte1").style.display= "block";
  document.getElementById("Parte2").style.display= "none";
}  

  let continuarBoton=document.getElementById("BotonSeccion1");

  continuarBoton.addEventListener("click",(Parte1),console.log("primera parte"))
  continuarBoton.addEventListener("click",(Parte2)),console.log("comenzara la siguiente parte")

 
//   para que acepte solo letras
 
  // pantalla 3 para datos de tarjeta
  function Parte2(){
    
  document.getElementById("Inicio").style.display= "none";
  document.getElementById("Parte1").style.display= "none";
  document.getElementById("Parte2").style.display= "block";
 }
 

  let finalizarBoton=document.getElementById("BotonSeccion2");
  
  finalizarBoton.addEventListener("click",(Parte2),console.log("segunda parte"))
  finalizarBoton.addEventListener("click",(Inicio),console.log("aqui debera de comenzar la validacion no el inicio"))

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
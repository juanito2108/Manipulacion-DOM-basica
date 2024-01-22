const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn=  document.querySelector('#btnCalcular')
const pRsult = document.querySelector('#result')
 btn.addEventListener('click', btnOnClick )
 //cons addeventlistener las funciones se ejecitan sin llamar a () solo el nombre

function btnOnClick (){
   const sumaInput = Number(input1.value) + Number(input2.value)
   pRsult.innerText = "resultado: " + sumaInput;
}
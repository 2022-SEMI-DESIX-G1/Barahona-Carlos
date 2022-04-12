//Problema #1---------------------------------------------------------------
const Palindromo=document.querySelector('.palindromo')
const decimal=document.querySelector('.decimal')
const binario=document.querySelector('.binario')
function getPalindromo(){
let str = document.getElementById("palindromo").value
function transform(str){
    let num = parseInt(str)
    return num.toString(2)
}
   let num = transform(str)

   function Palindrome(str){
     let strReversed = str.split("").reverse().join("");
     return strReversed === str ? "Es palindromo" : "No es palindromo";
}
     let respuesta1 = Palindrome(str)
      let respuesta2 = Palindrome(num)
     //var resupuesta4 = "no es palindromo de doble base"
     if(respuesta1 == "Es palindromo" && respuesta2 =="Es palindromo") {
      var respuesta4 = "Es palindromo de doble base"
}
     else{
       var respuesta4 = "No es palindromo de doble base" 
}
console.log(str)
console.log(respuesta1)
decimal.innerText = "Base 10 " +respuesta1
binario.innerText = "Base 2 " +respuesta2
Palindromo.innerText = "El numero "+str+" "+ respuesta4
console.log(num)
console.log(respuesta2)
console.log(respuesta4)
}
//Problema #2--------------------------------------------------------------------------------
const ctos = document.querySelector('.howmany')
// Me estaba rompiendo la cabeza y solo tenia que mover un corchete .-.
function getInput(){
 let texto = document.getElementById("a").value
//let texto = "AABBBACCAA";
//console.log(texto)
function cuentaLetras(txt){
    txt=txt.toLowerCase();
    let arr={};
    let n = texto.length;
    for(i=0; i < n; i++){
        let char=txt.charAt(i);
        if (char==" ") continue;
        if (arr[char]) arr[char]++
        else arr[char]=1;
    }
    return arr;
}
function objetoACadena(arr){
    let cadena=[];
    for (let k in arr)
    {
        cadena.push(k+"="+arr[k]);
    }
    return cadena.join(", ");
}
let contador=cuentaLetras(texto);
let answ=objetoACadena(contador)
console.log(answ)
console.log(objetoACadena(contador));
ctos.innerText = `La cantidad de cada caracter es: ${answ}`;

}
//Problema #3----------------------------------------------------------------------------
const bis=document.querySelector('.bisiesto')
function getInput2(){
let año = document.getElementById("year").value
console.log(año)
if (año%4==0&&año%100!=0)
{ 
     let info1 = año + " El año es un año bisiesto";
    bis.innerText = info1  
}
else if (año%400==0)
{  
     let info2 = año + " El año es un año bisiesto";
     bis.innerText = info2  
}  
else
{  
    let info3 = año + " El año no es bisiesto";
     bis.innerText = info3   
} 
}
//Problema #4
const sump=document.querySelector('.numprimo')
function getInput3(){
 let int = document.getElementById("prime").value
console.log(int)
function sumPrimes(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

 function isPrime(n) {
    if (n < 2) { return false; }
    if (n !== Math.round(n)) { return false; }
    let result = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result = false;
        }
    }
    return result;
}
console.log(sumPrimes(int))
sump.innerText ="La suma de los numeros Primos del 0 al"+" "+int +"es igual a: " + sumPrimes(int)
}





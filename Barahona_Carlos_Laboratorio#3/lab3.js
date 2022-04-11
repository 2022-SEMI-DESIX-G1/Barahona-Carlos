//Problema #1---------------------------------------------------------------
const Palindromo=document.querySelector('.palindromo')
const decimal=document.querySelector('.decimal')
const binario=document.querySelector('.binario')
let str = "33"
function transform(str){
    var num = parseInt(str)
    return num.toString(2)
}
   let num = transform(str)

   function Palindrome(str){
     var strReversed = str.split("").reverse().join("");
     return strReversed === str ? "Es palindromo" : "No es palindromo";
}
     var respuesta1 = Palindrome(str)
      var respuesta2 = Palindrome(num)
     var resupuesta4 = "no es palindromo de doble base"
     if(respuesta1 == "Es palindromo" , respuesta2 =="Es palindromo") {
      var respuesta4 = "Es palindromo de doble base"
}
     else{
       var respuesta4 = "No es palindromo de doble base" 
}
console.log(str)
console.log(respuesta1)
decimal.innerText = "Base 10 " +respuesta1
binario.innerText = "Base 2 " +respuesta2
Palindromo.innerText = "La variable " + respuesta4
console.log(num)
console.log(respuesta2)
console.log(respuesta4)

//Problema #2--------------------------------------------------------------------------------
const ctos = document.querySelector('.howmany')
// Me estaba rompiendo la cabeza y solo tenia que mover un corchete .-.
function getInput(){
 var texto = document.getElementById("a").value
//let texto = "AABBBACCAA";
//console.log(texto)
function cuentaLetras(txt){
    txt=txt.toLowerCase();
    var arr={};
    var n = texto.length;
    for(i=0; i < n; i++){
        var char=txt.charAt(i);
        if (char==" ") continue;
        if (arr[char]) arr[char]++
        else arr[char]=1;
    }
    return arr;
}
function objetoACadena(arr){
    var cadena=[];
    for (var k in arr)
    {
        cadena.push(k+"="+arr[k]);
    }
    return cadena.join(", ");
}
var contador=cuentaLetras(texto);
var answ=objetoACadena(contador)
console.log(answ)
console.log(objetoACadena(contador));
ctos.innerText = `La cantidad de cada caracter es: ${answ}`;

}
//Problema #3----------------------------------------------------------------------------
const bis=document.querySelector('.bisiesto')
function getInput2(){
var año = document.getElementById("year").value
console.log(año)
if (año%4==0&&año%100!=0)
{ 
     var info1 = año + " El año es un año bisiesto";
    bis.innerText = info1  
}
else if (año%400==0)
{  
     var info2 = año + " El año es un año bisiesto";
     bis.innerText = info2  
}  
else
{  
    var info3 = año + " El año no es bisiesto";
     bis.innerText = info3   
} 
}
//Problema #4
const sump=document.querySelector('.numprimo')
function getInput3(){
 var int = document.getElementById("prime").value
console.log(int)
function sumPrimes(n) {
    var sum = 0;
    for (var i = 0; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

 function isPrime(n) {
    if (n < 2) { return false; }
    if (n !== Math.round(n)) { return false; }
    var result = true;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            result = false;
        }
    }
    return result;
}
console.log(sumPrimes(int))
sump.innerText ="La suma de los numeros Primos del 0 al "+int +"es igual a: " + sumPrimes(int)
}





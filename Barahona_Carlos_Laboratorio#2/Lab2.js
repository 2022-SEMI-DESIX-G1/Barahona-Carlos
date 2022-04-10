// Problema #1
const Answer = document.querySelector('.Answer');
let Texto = "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Java es un lenguaje de programación orientado a objetos puros (OOP), mientras que JavaScript está basado en prototipos y, puede emular la programación orientada a objetos." ;
Answer.innerText = Texto

// Problema #2
const Suma = document.querySelector('.Suma');
const Resta = document.querySelector('.Resta');
const Multiplicacion = document.querySelector('.Multiplicacion');
const Division = document.querySelector('.Division');
var y = 2
var x = 6

s= x + y
r= x - y
m= x * y
d= x / y

console.log(s)
console.log(r)
console.log(m)
console.log(d)

Suma.innerText = "La suma es igual a " + s
Resta.innerText = "La resta es igual a " + r
Multiplicacion.innerText = "La multiplicacion es igual a " + m 
Division.innerText = "La Division es igual a " + d

//Problema #3
const concat = document.querySelector('.Ckt');
let variable1 = "Este texto son dos"
let variable2 = " variables Concatenadas"
var resultado = `${variable1}${variable2}`
console.log(resultado)
concat.innerText = resultado

// Problema #4 
const type = document.querySelector('.t')
console.log(type)

const str = "Esto es String"

type.innerHTML = typeof str 

// Problema #5
const objeto1 = document.querySelector('.obj1')
const objeto2 = document.querySelector('.obj2')
const objeto3 = document.querySelector('.obj3')
const objeto4 = document.querySelector('.obj4')
var obj = {
    precio: 5.99 ,
    Campeon: 'Riven',
    Skin: true,
    manos: undefined

}
objeto1.innerHTML = typeof obj.precio 
objeto2.innerHTML = typeof obj.Campeon
objeto3.innerHTML = typeof obj.Skin 
objeto4.innerHTML = typeof obj.manos 
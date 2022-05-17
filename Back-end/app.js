//function palindrome(string){
//var len = string.length;


//for (var i =0; i<len/2; i++){
  //  if (string[i] !== string[len-1-i]){

    //    return false;
    //}
//}
//return true;
//}

//

const palindrome = (s) => s === s.split("").reverse().join("");

console.log(palindrome('oso'))

const fibonacci= (n) => {
const arr = [0,1];
  for(let i = 2; i < n; i++){
    let z = arr[i - 2] + arr[i - 1];
      arr.push(z);

  }
  return arr;
}
console.log (fibonacci(5))
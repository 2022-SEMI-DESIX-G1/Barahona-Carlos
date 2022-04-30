
(() => {
   const Util = {
       methods: {
           fibonacci: (n) => {
           
               const arr = [0,1];
               for(let i = 2; i < n; i++){
                 let z = arr[i - 2] + arr[i - 1];
                   arr.push(z);

               }
               return arr;
           },
       }
   }
   document.Util = Util;
})();
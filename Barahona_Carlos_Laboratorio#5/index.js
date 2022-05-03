((Util) => {
  const App = {
      htmlElements: {
          form: document.querySelector('#form'),
          input: document.querySelector('#num'),
          response: document.querySelector('#output-container')
      },
      init: () => {
          App.htmlElements.form.addEventListener('submit', App.handlers.onFormSubmit);
          App.htmlElements.response.addEventListener('click', App.handlers.onCardClick);
      },
      util: {
          ...Util.methods,
      },
      templates: {
          card: (n) => {
              return `<div class="card">${n}</div>`;
          }
      },
      handlers: {
          onCardClick: (e) => {
             const yes = window.confirm('Are you sure you want Delete this Card?');
              if(yes) {
                  if(e.target.className === 'card') {
                     e.target.remove();
              }}
          },
          onFormSubmit: (e) => {
              e.preventDefault();

              App.htmlElements.response.innerHTML = '';

              const n = App.htmlElements.input.value;
              App.util.fibonacci(n).forEach(value => {
                  App.htmlElements.response.innerHTML += App.templates.card(value);
              });
          }
      }
  };
  App.init();
})(document.Util);

//get number
//function getInput(){
//let int = document.getElementById("num").value
//let element = document.getElementById("output-container");
//clear container on click
//element.textContent = ''

//Create fibonacci Sequence :)
//let fibonacci = [];
//fibonacci[0] = 0;
//fibonacci[1] = 1;
//for (let i = 2; i < int; i++) {
  //fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];


 
//}console.log(fibonacci)
  //create element
  //for(let h = 0; h < fibonacci.length; h++){
    //  var tag = document.createElement("div");
  //set class
   //tag.classList.add('card');
   //set event handler
   //tag.setAttribute("onclick", "getCard(this.id)")
   //set id
   //tag.setAttribute("id","card"+h)
   //create text inside the element
   //let text = document.createTextNode(fibonacci[h]);
   //tag.appendChild(text);
   //insert in to document
   //let element = document.getElementById("output-container");
  //element.appendChild(tag);
//}
//}

//Delete clicked elements
//function getCard(clickd_id){
 //const e = document.getElementById(clickd_id);
 //console.log(e)
  //const yes=window.confirm("Desea eliminar ese elemento?");
  //if(yes){
   //e.remove(clickd_id); 
  //}
  //else{
  //alert('No se elimino este elemento');
//}
 
 //
//

const fibonacci = (n) => {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    let z = arr[i - 2] + arr[i - 1];
    arr.push(z);

  }
  return arr;
}
console.log(fibonacci(5))

//const axios = require('axios').default;

//const main = async () => {
  //const { data } = await axios("https://pokeapi.co/api/v2/pokemon/pikachu")
  //const info = 
  //new Object();
  //info.name = data.name,
    //info.id = data.id,
    //info.abilities = data.abilities.map(a => a.ability.name),
    //info.height = data.height,
    //info.weight = data.weight,
    //info.url = data.species.url
  //console.log(info)
  //return info
  //abilities.forEach(abilities => {
  //});

//};

//main()





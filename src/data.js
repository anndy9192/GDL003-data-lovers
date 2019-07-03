// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filtrado = (allCharachters, role) => {
  console.log(allCharachters);
  let filtrado = [];
  //Recoririendo todos los personajes
  for (let i in allCharachters) {
    //si el elemento que se esta iterando (recorriendo) de allCharachters tiene su propia propiedad (hasOwnProperty) verifica si tiene propiedades
    if (allCharachters.hasOwnProperty(i)) {
      //a let element se le asigna objeto que se esta iterando 
      let element = allCharachters[i];
      //por cada un elemento del array tags de element se llamara champion 
      element.tags.forEach(champion => {
        //si champion es == al rol, lo guarda en arreglo filtrado 
        if (champion == role) {
          //Agregando al arreglo del champion
          filtrado.push(element);
        }
      });
    }
  }
  //console.log(filtrado);
  return filtrado;
};

const sorted = (charachters) => {
  let sorted = charachters;
  sorted.reverse();
  return sorted;
};

window.example = {
  sorted,
  filtrado
};
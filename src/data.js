// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const filterData = (allCharachters, role) => {
  //console.log(allCharachters);
  let filterData = [];
  //Recoririendo todos los personajes
  for (let i in allCharachters) {
    //si el elemento que se esta iterando (recorriendo) de lol tiene su propia propiedad (hasOwnProperty) verifica si tiene propiedades
    if (allCharachters.hasOwnProperty(i)) {
      //a let element se le asigna objeto que se esta iterando 
      let element = allCharachters[i];
      //por cada un elemento del array tags de element se llamara champion 
      element.tags.forEach(champion => {
        //si champion es == al rol, lo guarda en arreglo filterData 
        if (champion == role) {
          //Agregando al arreglo del champion
          filterData.push(element);
        }
      });
    }
  }
  //console.log(filterData);
  return filterData;
};

const sortData = (charachters) => {
  let sortData = charachters;
  sortData.reverse();
  return sortData;
};

const computeStats = (allCharachters) => {
  var arrayStatistics = [];

  arrayStatistics.push({
    "Role": "Assassin",
    "Count": filterData(allCharachters, "Assassin").length
  });

  arrayStatistics.push({
    "Role": "Marksman",
    "Count": filterData(allCharachters, "Marksman").length
  });

  arrayStatistics.push({
    "Role": "Tank",
    "Count": filterData(allCharachters, "Tank").length
  });

  arrayStatistics.push({
    "Role": "Fighter",
    "Count": filterData(allCharachters, "Fighter").length
  });

  arrayStatistics.push({
    "Role": "Support",
    "Count": filterData(allCharachters, "Support").length
  });

  arrayStatistics.push({
    "Role": "Mage",
    "Count": filterData(allCharachters, "Mage").length
  });

  return arrayStatistics;
};

window.example = {
  sortData,
  filterData,
  computeStats
};
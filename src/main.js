let AssassinArray = []
let MarksmanArray = []
let TankArray = []
let FighterArray = []
let MageArray = []
let SupportArray = []
//i va a tomar el valor de cada elemento de data
for (i in lol.data) {
//si el elemento que se esta iterando (recorriendo) de lol.data tiene su propia propiedad
    if (lol.data.hasOwnProperty(i)) {
//a let elemen se le asigna objeto que se esta iterando 
        let element = lol.data[i];
//por cada un elemento del array tags de element "el" toma el valor 
		element.tags.forEach( el => {
//si 'el' es == ese tags, lo guarda en el array que se le asigno (push-empujar) 
            if(el == "Assassin"){
				//console.log("Assassin: ", element.name)
//agarra el valor del elemnt name
				AssassinArray.push(element.name)
        	}
			else if(el == "Marksman"){
				//console.log("Marksman: ", element.name)
				MarksmanArray.push(element.name)
        	}
			else if(el == "Tank"){
				//console.log("Tank: ", element.name)
				TankArray.push(element.name)
        	}
			else if(el == "Fighter"){
				//console.log("Fighter: ", element.name)
				FighterArray.push(element.name)
        	}
			else if(el == "Mage"){
				//console.log("Mage: ", element.name)
				MageArray.push(element.name)
        	}
			else if(el == "Support"){
				//console.log("Support: ", element.name)
				SupportArray.push(element.name)
        	}
        })
    }
}

console.log("Assassin: ", AssassinArray);
console.log("Marksman: ", MarksmanArray);
console.log("Tank: ", TankArray);
console.log("Fighter: ", FighterArray);
console.log("Mage: ", MageArray);
console.log("Support: ", SupportArray);
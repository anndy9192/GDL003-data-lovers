//Guardar todos los botones en un arreglo
let buttonsRole = document.querySelectorAll(".btnRole");
console.log(buttonsRole);


buttonsRole.forEach(button => {
	button.addEventListener("click", function () {
		//Asignar a la variable result el retorno de la funcion filtrado
		let result = filtrado(lol, button.value);
		console.log(result);
		drawCards(result);
	});
});


//Funcion para pintar las cartas
function drawCards(filteredCharacters) {


	const searchOutput = document.querySelector('.cards');
	let output = '';
	//* Se recorreo el arreglo y se genera una tarjeta por cada elemento
	filteredCharacters.forEach(champion => {
		output += `
			<div class="card">
				<h1>${champion.name}</h1>
				<img src="${champion.img}">
				<p class="title">Stats:</p>
				<p>Attack: ${champion.info.attack}</p>
				<p>Defense: ${champion.info.defense}</p>
				<p>Magic: ${champion.info.magic}</p>
				<p>Difficulty: ${champion.info.difficulty}</p>
				<p><button class="more" id="${champion.name}">More</button></p>
			</div>
			`;
	});

	searchOutput.innerHTML = output;

	let buttonsMore = document.querySelectorAll(".more");
	console.log(buttonsMore);

	buttonsMore.forEach(button => {
		button.addEventListener("click", function () {
			alert(button.id);
		});
	});

}

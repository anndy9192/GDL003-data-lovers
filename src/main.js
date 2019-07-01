let home =document.querySelector('.home');
let rolechampion = document.querySelector ('.rolechampion');
rolechampion.style.display="none";
let result;

//home.style.display="block";

let order= document.getElementById("btnOrder");


order.addEventListener("click" , function() {
		
	let reversedCharacters = window.example.sorted(result);
	drawCards(reversedCharacters);
});

let roles= document.getElementById("roles");
console.log(roles);
roles.addEventListener("click", function(event) {
	//Evita que el boton se recargue
	event.preventDefault(event);
	rolechampion.style.display="block";
	home.style.display="none";
});


//Guardar todos los botones en un arreglo
let buttonsRole = document.querySelectorAll(".btnRole");
console.log(buttonsRole);


buttonsRole.forEach(button => {
	button.addEventListener("click", function () {
		//Asignar a la variable result el retorno de la funcion filtrado
		result = window.example.filtrado(lol, button.value);
		console.log(result);
		drawCards(result);
	});
});

//Funcion para pintar las cartas
function drawCards(filteredCharacters) {

	const searchOutput = document.querySelector('.cards');
	let output = '';
	//* Se recorre el arreglo y se genera una tarjeta por cada elemento
	filteredCharacters.forEach(champion => {
		
		output += `
		<div class="container">
			<div class="card">
				<h1>${champion.name}</h1>
				<img src="${champion.img}" width="30px" height="30px">
				<p class="title">Stats:</p>
				<p>Attack: ${champion.info.attack}</p>
				<p>Defense: ${champion.info.defense}</p>
				<p>Magic: ${champion.info.magic}</p>
				<p>Difficulty: ${champion.info.difficulty}</p>
				<p><button class="more" id="${champion.name}">More</button></p>
			</div>
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
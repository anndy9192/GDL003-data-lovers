let home = document.querySelector('.home');
let rolechampion = document.querySelector('.rolechampion');
let estadisticas = document.querySelector('.estadisticas');
let ordenar = document.getElementById("cardsContainer");
let reiniciar = document.getElementById("reiniciar");

rolechampion.style.display = "none";
estadisticas.style.display = "none";
ordenar.style.display = "none";
reiniciar.style.display = "none";
let result;

let btnRoles = document.getElementById("roles");
let btnStatistics = document.getElementById("statistics");

console.log(btnRoles);
console.log(btnStatistics);



let order = document.getElementById("btnOrder");

order.addEventListener("click", function () {

	let reversedCharacters = window.example.sortData(result);
	drawCards(reversedCharacters);
});

btnRoles.addEventListener("click", function (event) {
	//Evita que el boton se recargue
	event.preventDefault(event);
	rolechampion.style.display = "block";
	home.style.display = "none";
});

btnStatistics.addEventListener("click", function (event) {
	//Evita que el boton se recargue
	event.preventDefault(event);
	estadisticas.style.display = "block";
	home.style.display = "none";
	let statistics = window.example.computeStats(lol.data);
	console.log(statistics);

	const statisticsOutput = document.querySelector('.allStatistics');
	let output = '';

	statistics.forEach(element => {


		output += `
		<div class="container">
			<div class="card">
				<p>Role: ${element.Role}</p>
				<p>Count: ${element.Count}</p>
			</div>
		</div>
		`;
		reiniciar.style.display = "block";
	});

	statisticsOutput.innerHTML = output;

});

//Guardar todos los botones en un arreglo
let buttonsRole = document.querySelectorAll(".btnRole");
console.log(buttonsRole);

//console.log(lol)

buttonsRole.forEach(button => {
	button.addEventListener("click", function () {
		//Asignar a la variable result el retorno de la funcion filterData
		result = window.example.filterData(lol.data, button.value);
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
				<!-- Trigger/Open The Modal -->
				<p><button class="more" id="${champion.name}">More</button></p>
			</div>
			<!-- The Modal -->
			<div id="${champion.name}myModal" class="modal">
				<!-- Modal content -->
				<div class="row modal-content">
					<span class="close" id="${champion.name}Close">&times;</span>
					<div class="column">
						<h2><p> ${champion.name} <p></h2><br/>
						<p><img src="${champion.splash}" width="100%" height="100%"></p>
					</div>
					<div class="column">
						<p>hp: ${champion.stats.hp}</p>
						<p>hpperlevel: ${champion.stats.hpperlevel}</p>
						<p>mp: ${champion.stats.mp}</p>
						<p>mpperlevel: ${champion.stats.mpperlevel}</p>
						<p>movespeed: ${champion.stats.movespeed}</p>
						<p>armor: ${champion.stats.armor}</p>
						<p>armorperlevel: ${champion.stats.armorperlevel}</p>
						<p>spellblock: ${champion.stats.spellblock}</p>
						<p>spellblockperlevel: ${champion.stats.spellblockperlevel}</p>
						<p>attackrange: ${champion.stats.attackrange}</p>
						<p>hpregen: ${champion.stats.hpregen}</p>
						<p>hpregenperlevel: ${champion.stats.hpregenperlevel}</p>
						<p>mpregen: ${champion.stats.mpregen}</p>
						<p>mpregenperlevel: ${champion.stats.mpregenperlevel}</p>
						<p>crit: ${champion.stats.crit}</p>
						<p>critperlevel: ${champion.stats.critperlevel}</p>
						<p>attackdamage: ${champion.stats.attackdamage}</p>
						<p>attackdamageperlevel: ${champion.stats.attackdamageperlevel}</p>
						<p>attackspeedoffset: ${champion.stats.attackspeedoffset}</p>
						<p>attackspeedperlevel: ${champion.stats.attackspeedperlevel}</p>
					</div>
				</div>
			</div>
		</div>
		`;
		reiniciar.style.display = "block";
		ordenar.style.display = "block";
	});


	searchOutput.innerHTML = output;

	let buttonsMore = document.querySelectorAll(".more");
	console.log(buttonsMore);

	buttonsMore.forEach(button => {
		button.addEventListener("click", function () {

			// Get the modal
			var modal = document.getElementById(button.id + "myModal");
			console.log("modal", modal);

		

			// Get the <span> element that closes the modal
			var span = document.getElementById(button.id + "Close");
			console.log(span);

			// When the user clicks on the button, open the modal 

			modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function () {
				modal.style.display = "none";
			};

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			};
		});
	});
}
 console
function reiniciarPagina() {

	location.reload();

	//refres en pen
	//window.location.href = window.location.href
}
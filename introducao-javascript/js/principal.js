//capitulo 2
//Video de operadores logicos 
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;
	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	var tdImc = paciente.querySelector(".info-imc");
	var pesoValido = true;
	var alturaValido = true;

	if(peso<=0 || peso>=1000){
		//console.log("Peso invalido");
		pesoValido = false;
		tdImc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}
	if(altura<=0 || altura>=3.00){
	    //console.log("Altura inválida");
	    alturaValido = false;
	    tdImc.textContent = "Altura inválida!";
	    paciente.classList.add("paciente-invalido");
	}

	if(pesoValido && alturaValido){
		var imc = peso / (altura*altura);
		tdImc.textContent = imc.toFixed(2);
	}
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
    alert("Oi, cliquei no botão.");
});
//console.log(imc);
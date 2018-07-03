//capitulo 2
//Video de operadores logicos 
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");
var pesoValido = true;
var alturaValido = true;

if(peso<=0 || peso>=1000){
	console.log("Peso invalido");
	pesoValido = false;
	tdImc.textContent = "Peso inválido!";
}
if(altura<=0 || altura>=3.00){
    console.log("Altura inválida");
    alturaValido = false;
    tdImc.textContent = "Altura inválida!";
}

if(pesoValido && alturaValido){
	var imc = peso / (altura*altura);
	tdImc.textContent = imc;
}


console.log(imc);
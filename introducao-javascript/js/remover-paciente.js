// var pacientes = document.querySelectorAll(".paciente");

// pacientes.forEach(function(paciente){
// 	paciente.addEventListener("dblclick", function(){
// 		this.remove();
// 	});
// });
var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
	var alvo = event.target;
	var paiDoAlvo = alvo.parentNode;
	paiDoAlvo.remove();
});
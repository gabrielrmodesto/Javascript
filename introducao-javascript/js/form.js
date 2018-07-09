//capitulo 5
//quebrando o codigo em arquivos diferentes

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	//seleciono o formulario
    var form = document.querySelector("#form-adiciona");
    //valores dos inputs atraves de name
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    //criando a tr
    var pacienteTr = document.createElement("tr");
    //criando as td
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    //fazendo com que as td tenham conteudo
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);
    //criando o apendice entre tr e td
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    //pegando o tbody para ter o tr ligado a ele
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    var campos = document.querySelectorAll("input");
    for(i=0; i<campos.length; i++){
    	var campo = campos[i];
    	campo.value = "";
    }
    

});
//capitulo 5
//quebrando o codigo em arquivos diferentes

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();
	//seleciono o formulario
    var form = document.querySelector("#form-adiciona");
    //chamando a funcao atraves de um objeto
    var paciente = obtemPacienteDoFormulario(form);
    //chamando a funcao de montar as tr
    var pacienteTr = montaTr(paciente);
    //pegando o tbody para ter o tr ligado a ele
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); 

    form.reset();
});

function obtemPacienteDoFormulario(form){
    //criar o objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    //criando a tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    //criando o apendice entre tr e td
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

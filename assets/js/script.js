//VARIÁVEIS:

// var -> é uma variável de escopo global em que o valor pode ser alterado
// let -> é uma variável de escopo local em que o valor pode ser alterado
// const -> é uma variável de escopo global em que o valor não pode ser alterado

//MÉTODOS PARA ACESSAR ALGUM ELEMENTO DA DOM:

//Por Tag: getElementByTagName()
//Por Id: getElementById()
//Por nome: getElementByName()
//Por Classe: getElementByClassName()
//Por seletor: querySelector()

//Chamando os métodos (exemplos):

//Para chamar o id "nome":
//var nome = window.document.getElementById('nome')

//Para chamar a classe "email":
//let email = document.querySelector('#email') //ou
//let email = document.querySelector('input.email')

//let assunto = document.querySelector('#assunto')

//nome.style.width = '100%'

//email.style.width = '100%'

//function validaNome() {

//    if (nome.value.length < 3) {
//       alert("nome inválido")
//    }

//}

let nomeOk = false

function validaNome() {

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
    txtNome.innerHTML = "Esse nome não parece um nome válido..."
    txtNome.style.color = "red"
    } else {
        txtNome.innerHTML  = "Ok!"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

// A função validaEmail ainda está incompleta...
/*
function validaEmail() {
    var email = document.getElementById('txtEmail');
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        txtEmail.innerHTML = "Esse nome não parece um e-mail válido...";
        txtEmail.style.color = "red";
        email.focus;
        return false;
    } else {
        txtEmail.innerHTML  = "Ok!";
        return true;
    }
}
*/


let assuntoOk = false

function validaAssunto() {

    let txtAssunto = document.querySelector("#txtAssunto")

    if (assunto.value.length > 300) {
        txtAssunto.innerHTML = "Por favor, digite até 300 caracteres."
        txtAssunto.style.color = "red"
    } else {
        txtAssunto.innerHTML = "Ok!"
        txtAssunto.style.color = "green"
        assuntoOk = true
    }

}

function enviar() {
    if(nomeOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Preencha o formulário corretamente antes de enviar...")
    }
}
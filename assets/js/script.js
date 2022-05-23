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
var nome = window.document.getElementById('nome')

//Para chamar a classe "email":
//let email = document.querySelector('#email') //ou
let email = document.querySelector('input.email')

let assunto = document.querySelector('#assunto')

nome.style.width = '100%'

email.style.width = '100%'

//function validaNome() {

//    if (nome.value.length < 3) {
//       alert("nome inválido")
//    }

//}

let nameOk = false

function validaNome() {

    let txtNome = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
    txtNome.innerHTML = "Esse nome não parece um nome válido..."
    txtNome.style.color = "red"
    } else {
        txtNome.innerHTML  = "Ok!"
        txtNome.style.color = "green"
        nameOk = true
    }

}


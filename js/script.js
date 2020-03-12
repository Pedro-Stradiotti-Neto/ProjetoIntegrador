// Auxilio Validacao
// https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427

let terminacoes = [".com", ".co", ".org", ".net", ".br"];

document.getElementById("enviar").addEventListener("click", (event) => {
    let nome = document.getElementById('nomeContato').value;
    let email = document.getElementById('emailContato').value;
    let telefone = document.getElementById('telContato').value;
    let mensagem = document.getElementById('msgContato').value;

    if (validaDados(nome, email, mensagem)) {
        alert("Dados enviados com sucesso!")
    } else {
        event.preventDefault();
    }

});

function validaDados(name, mail, msg) {
    document.getElementById("alert-name").style.visibility = "hidden";
    document.getElementById("alert-email").style.visibility = "hidden";
    document.getElementById("alert-mensagem").style.visibility = "hidden";

    let controle = true;    //-> Faz o controle das verificacões

    if (name.length < 3) {
        document.getElementById("alert-name").innerHTML = "Nome Inválido!";
        document.getElementById("alert-name").style.visibility = "visible";
        controle++;
    }

    if (msg.length < 10) {
        document.getElementById("alert-mensagem").innerHTML = "Texto Inválido!";
        document.getElementById("alert-mensagem").style.visibility = "visible";
        controle++;
    }

    // Verificacoes do Email
    let auxEmail = mail.split(" ");         // Separa em um array caso haja espaco no meio do email informado
    let antesArroba = mail.substring(0, mail.indexOf("@"));                         // Pega o que está antes do @
    let depoisArroba = mail.substring(mail.indexOf("@") + 1, mail.length);     // Pega o que está depois do @

    if (auxEmail.length > 1) {      // Verifica se há espacos entre o email e/ou é uma string vazia
        document.getElementById("alert-email").innerHTML = "Há espacos no e-mail!";
        document.getElementById("alert-email").style.visibility = "visible";
        controle++;
    } else if (antesArroba.length < 3 || antesArroba.indexOf("@") != -1) {
        document.getElementById("alert-email").innerHTML = "E-mail Inválido!";
        document.getElementById("alert-email").style.visibility = "visible";
        controle++;
    } else if (depoisArroba.length < 5 || depoisArroba.indexOf("@") != -1 || !(depoisArroba.endsWith(".com"))) {
        document.getElementById("alert-email").innerHTML = "E-mail Inválido!";
        document.getElementById("alert-email").style.visibility = "visible";
        controle++;
    }

    if (controle > 1) {
        return false
    } else {
        return true;
    }
}
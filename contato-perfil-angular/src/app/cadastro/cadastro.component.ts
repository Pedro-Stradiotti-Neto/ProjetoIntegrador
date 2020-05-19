import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  cadastrar() {
    let nome: string = (<HTMLSelectElement>document.getElementById('nome')).value;
    let email: string = (<HTMLSelectElement>document.getElementById('email')).value;
    let senha: string = (<HTMLSelectElement>document.getElementById('senha')).value;
    let confirmaSenha: string = (<HTMLSelectElement>document.getElementById('confirmaSenha')).value;

    if (this.validar(nome, email, senha, confirmaSenha)) {
      this.subir();
      alert("Dados enviados com sucesso!");
      location.assign('/usuarios')
    } else {
      event.preventDefault();
    }

  }

  validar(nome: string, email: string, senha: string, confirmaSenha: string) {
    document.getElementById('alert-nome').style.visibility = "hidden";
    document.getElementById('alert-email').style.visibility = "hidden";
    document.getElementById('alert-senha').style.visibility = "hidden";
    document.getElementById('alert-confirmaSenha').style.visibility = "hidden";

    let contador = 0;

    if (nome.length < 3) {
      document.getElementById('alert-nome').innerHTML = "Nome Inválido";
      document.getElementById('alert-nome').style.visibility = "visible";
      contador++;
    } else {
      document.getElementById('nome').style.border = "1px solid #0000CD"
    }

    let auxEmail = email.split(" ");
    let antesArroba = email.substring(0, email.indexOf('@'));
    let depoisArroba = email.substring(email.indexOf('@') + 1, email.length);

    if (auxEmail.length > 1) {
      document.getElementById('alert-email').innerHTML = "Existe espaço entre o email";
      document.getElementById('alert-email').style.visibility = "visible";
      contador++;
    } else if (antesArroba.length < 3 || antesArroba.indexOf('@') != -1) {
      document.getElementById('alert-email').innerHTML = "Email inválido";
      document.getElementById('alert-email').style.visibility = "visible";
      contador++;
    } else if (depoisArroba.length < 5 || depoisArroba.indexOf('@') != -1) {
      document.getElementById('alert-email').innerHTML = "Email Inválido";
      document.getElementById('alert-email').style.visibility = "visible";
      contador++;
    } else {
      document.getElementById("email").style.border = "1px solid #ced4da";
    }

    if (senha.length < 9) {
      document.getElementById('alert-senha').innerHTML = "Senha Fraca";
      document.getElementById('alert-senha').style.visibility = "visible";
      contador++;
    } else {
      document.getElementById("senha").style.border = "1px solid #ced4da";
    }

    if (confirmaSenha.length != senha.length) {
      document.getElementById('alert-confirmaSenha').innerHTML = "Senha digitada é diferente da anterior";
      document.getElementById('alert-confirmaSenha').style.visibility = "visible";
      contador++;
    } else {
      document.getElementById('confirmaSenha').style.border = "1px solid #ced4da";
    }

    if (contador > 0) {
      return false;
    } else {
      return true;
    }


  }

  subir() {
    this.usuarioService.cadastrarUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }


}

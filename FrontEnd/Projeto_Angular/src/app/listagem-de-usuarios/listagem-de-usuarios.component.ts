import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Endereco } from '../models/endereco';
import { EnderecoService } from '../services/endereco.service';
import { Doacao } from '../models/doacao';
import { DoacaoService } from '../services/doacao.service';

@Component({
  selector: 'app-listagem-de-usuarios',
  templateUrl: './listagem-de-usuarios.component.html',
  styleUrls: ['./listagem-de-usuarios.component.css']
})
export class ListagemDeUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario = new Usuario;
  enderecos: Endereco[];
  endereco: Endereco = new Endereco;
  doacoes: Doacao[];
  doacao: Doacao = new Doacao;

  constructor(private usuarioService: UsuarioService, private enderecoService: EnderecoService, private doacaoService: DoacaoService) { }

  ngOnInit(): void {
    this.obterTodosOsUsuarios();
    this.obterTodosOsEnderecos();
    this.obterTodosAsDoacoes();

    let infoUser: string = localStorage.getItem('delUsuarioOk');
    let infoEndereco: string = localStorage.getItem('delEnderecoOk');

    if (infoUser == "true") {
      alert('Usuário Deletado com sucesso')
      localStorage.clear();
    }

    if (infoEndereco == "true") {
      alert('Endereco Deletado com sucesso')
      localStorage.clear();
    }

    window.scroll(0, 0);
  }

  obterTodosOsUsuarios() {
    this.usuarioService.obterTodos().subscribe((resp: Usuario[]) => {
      this.usuarios = resp
    });
  }

  obterTodosOsEnderecos() {
    this.enderecoService.obterTodos().subscribe((resp: Endereco[]) => {
      this.enderecos = resp;
    })
  }

  obterTodosAsDoacoes() {
    this.doacaoService.obterTodos().subscribe((resp: Doacao[]) => {
      this.doacoes = resp;
    })
  }

  btnUsuario(user: Usuario) {
    this.usuario = user;
  }

  btnEndereco(endereco: Endereco) {
    this.endereco = endereco;
  }

  btnDoacao(doacao: Doacao) {
    this.doacao = doacao;
  }
}
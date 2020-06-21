import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listagem-de-usuarios',
  templateUrl: './listagem-de-usuarios.component.html',
  styleUrls: ['./listagem-de-usuarios.component.css']
})
export class ListagemDeUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.obterTodosOsUsuarios();

    let item: string = localStorage.getItem('delOk');

    if (item == "true") {
      alert('Usuário Deletado com sucesso')
      localStorage.clear();
    }
    window.scroll(0, 0);
  }

  obterTodosOsUsuarios() {
    this.usuarioService.obterTodos().subscribe((resp: Usuario[]) => {
      this.usuarios = resp
    });
  }

  btnDel(user: Usuario) {
    this.usuario = user;
  }

  btnSim() {
    this.usuarioService.deletarUsuario(this.usuario.codigo).subscribe(() => {
      location.assign('/usuarios');
      localStorage.setItem('delOk', 'true')
    })
  }

  esconderSenha(senha) {
    return '******';
  }
}
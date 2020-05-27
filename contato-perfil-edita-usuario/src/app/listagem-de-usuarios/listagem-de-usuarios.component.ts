import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listagem-de-usuarios',
  templateUrl: './listagem-de-usuarios.component.html',
  styleUrls: ['./listagem-de-usuarios.component.css']
})
export class ListagemDeUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  usuario: Usuario = new Usuario;
  deletar: boolean = false;

  constructor(private usuarioService: UsuarioService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.obterTodosOsUsuarios();
    let id: number = (this.route.snapshot.params['id'])
    this.buscaId(id)

  }

  obterTodosOsUsuarios() {
    this.usuarioService.obterTodos().subscribe((resp: Usuario[]) => {
      this.usuarios = resp
    });
  }

  buscaId(id: number) {
    this.usuarioService.obterPorId(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  deletaSim() {
    this.usuarioService.deletarUsuario(this.usuario.id).subscribe(() => {
      this.deletar = true;
      this.router.navigate(['/feed'])
      localStorage.setItem('deletar', this.deletar.toString())
    })
  }

  deletaNao() {
    this.router.navigate(['/feed'])
  }
}


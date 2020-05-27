import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-deletar-usuario',
  templateUrl: './deletar-usuario.component.html',
  styleUrls: ['./deletar-usuario.component.css']
})
export class DeletarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario
  deletado: boolean

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id: number = this.route.snapshot.params['id']
    this.obterUsuarioPorId(id)
  }

  obterUsuarioPorId(id: number) {
    this.usuarioService.obterPorId(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    }, err => {
      console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
    });
  }

  btnSim() {
    this.usuarioService.deleteUsuario(this.usuario.id).subscribe(() => {
      this.deletado = true
      this.router.navigate(['/usuarios'])
      localStorage.setItem("deletado", this.deletado.toString())
    })
  }

  btnNao() {
    this.router.navigate(['/usuarios'])
  }

}

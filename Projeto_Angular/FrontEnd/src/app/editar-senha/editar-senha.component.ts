import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';


@Component({
  selector: 'app-editar-senha',
  templateUrl: './editar-senha.component.html',
  styleUrls: ['./editar-senha.component.css']
})
export class EditarSenhaComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  editarSenha() {
    let confirmaSenha: string = (<HTMLSelectElement>document.getElementById('confirmaSenha')).value;

    if (confirmaSenha == this.usuario.senha) {

      this.usuario.senha = confirmaSenha
      this.usuarioService.redefinirSenha(this.usuario.email).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.usuario.senha = confirmaSenha
        console.log(this.usuario.senha)
        this.usuarioService.attSenha(this.usuario).subscribe((resp: Usuario) => {
          this.usuario = resp
          alert('senha alterada com sucesso')
        })
      }, err => { alert('Usuario não existe') })
    } else {
      alert('erro ao alterar senha')
    }
  }

}

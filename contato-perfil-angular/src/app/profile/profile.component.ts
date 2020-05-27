import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario = new Usuario;
  choose: boolean = false;

  constructor(private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit() {
    this.obterUsuarioPorId(this.route.snapshot.params['id']);

    localStorage.setItem('escolha', String(this.choose))
    this.editar();
  }

  obterUsuarioPorId(id: number) {
    this.usuarioService.obterPorId(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  editar() {
    let propFieldset = document.querySelector("fieldset");
    let propEdit = <HTMLInputElement>document.getElementById("save");
    let choose = localStorage.getItem('escolha');
    let showPassword = <HTMLInputElement>document.getElementById("telPerfil");

    if (choose == 'true') {
      propFieldset.disabled = false;
      propEdit.disabled = false;
      localStorage.setItem('escolha', 'false');
      showPassword.setAttribute('type', 'text');
    } else {
      propFieldset.disabled = true;
      propEdit.disabled = true;
      localStorage.setItem('escolha', 'true');
      showPassword.setAttribute('type', 'password');
    }
  }

  salvar() {
    this.usuarioService.attDadosUsuario(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      this.router.navigate(['/usuarios']);
      location.assign('/usuarios');
    })
  }

  btnSim() {
    this.usuarioService.deletarUsuario(this.usuario.id).subscribe(() => {
      localStorage.setItem('delOk', 'true')
      this.router.navigate(['/usuarios']);
    })
  }
}

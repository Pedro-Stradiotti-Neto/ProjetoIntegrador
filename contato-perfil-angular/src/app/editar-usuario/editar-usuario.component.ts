import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: usuario = new usuario

  constructor(private usuarioServices: UsuarioService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findById(id)
  }
  findById(id: number){
    this.usuarioServices.getByIdUsuario(id).subscribe((resp: usuario) =>{
      this.usuario = resp
    })
  }
  salvar(){
    this.usuarioServices.putAlterar(this.usuario).subscribe((resp: usuario) =>{
      this.usuario = resp
      this.router.navigate(['/profile'])
      location.assign('/profile')
    })
  }

}

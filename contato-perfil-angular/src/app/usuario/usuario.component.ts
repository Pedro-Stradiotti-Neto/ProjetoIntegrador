import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import {usuario} from '../model/usuario';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaUsuario: usuario []
  usuario: usuario = new usuario

  constructor(private usuarioServices: UsuarioService) { }

  ngOnInit() {
    this.findallUsuario()

  }
  findallUsuario(){
    this.usuarioServices.getAllUsuario().subscribe((resp: usuario[])=>{
      this.listaUsuario = resp
    })
  }
  
}

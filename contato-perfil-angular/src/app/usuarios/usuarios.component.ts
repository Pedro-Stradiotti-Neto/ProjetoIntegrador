import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuariosService } from '../service/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios: Usuario[]

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.findAllUsuarios()
  }

  findAllUsuarios() {
    this.usuariosService.getAllUsuario().subscribe((resp: Usuario[]) => {
      this.listaUsuarios = resp;
    });
  }

}

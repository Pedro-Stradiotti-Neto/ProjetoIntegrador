import { Component, OnInit } from '@angular/core';
import { ListarService } from '../service/listar.service';
import { Usuario } from '../model/Usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listaUsuarios: Usuario[]

  constructor(private listarService: ListarService) { }

  ngOnInit() {
    this.findAllUsuarios()
  }

  findAllUsuarios() {
    this.listarService.getAllUsuarios().subscribe((resp: Usuario[]) => {
      this.listaUsuarios = resp
    })
  }

}

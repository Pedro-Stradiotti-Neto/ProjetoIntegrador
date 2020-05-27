import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.css']
})
export class DeleteUsuarioComponent implements OnInit {

  usuario: usuario = new usuario
  delOk: boolean = false
  

  constructor(private usuarioServices: UsuarioService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    let id:number = this.route.snapshot.params['id']
    this.findById(id)

  }
  findById(id:number){
    this.usuarioServices.getByIdUsuario(id).subscribe((resp: usuario) =>{
      this.usuario = resp
    }, err =>{
          console.log(`Erro: ${err.status}, não conseguimos pegar o id`)
        })
  }

  btnSim(){
    this.usuarioServices.deleteUsuario(this.usuario.id).subscribe(() =>{
      this.delOk = true
      this.router.navigate(['/profile'])
      localStorage.setItem("delOk", this.delOk.toString())
    })
  }
  btnNao(){
    this.router.navigate(['/profile'])
  }

}


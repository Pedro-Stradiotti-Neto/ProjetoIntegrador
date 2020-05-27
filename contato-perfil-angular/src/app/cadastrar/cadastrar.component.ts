import { Component, OnInit } from '@angular/core';
import { usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {


 usuario: usuario = new usuario
  valido: usuario = new usuario

  

  constructor(private usuarioServices: UsuarioService,  private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  cadastro(){
    if( this.usuario.email !=this.valido.email && this.usuario.senha!=this.valido.senha){

    }else{
      this.usuarioServices.postCadastro(this.usuario).subscribe((resp: usuario)=>{
        this.usuario = resp
        this.router.navigate(['/usuario'])
      })

    }
    
  }

}

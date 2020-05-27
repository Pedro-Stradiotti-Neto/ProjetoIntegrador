import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarioAutenticado: boolean = false;

  enderecoDoServidor = 'http://93.188.161.223:9000/user';

  constructor(private http: HttpClient, private router: Router) { }

  obterTodos() {
    return this.http.get(this.enderecoDoServidor);
  }
  obterPorId(id: number) {
    return this.http.get(this.enderecoDoServidor + '/' + id);
  }

  cadastrarUsuario(usuario: Usuario) {
    return this.http.post(this.enderecoDoServidor, usuario);
  }

  putUsuario(usuario: Usuario) {
    return this.http.put(this.enderecoDoServidor, usuario);
  }

  deletarUsuario(id: number) {
    return this.http.delete(`this.enderecoDoServidor/${id}`);
  }

  fazerLogin(usuario: Usuario) {
    if (usuario.email === 'teste@gmail.com' && usuario.senha === '123456789') {

      this.usuarioAutenticado;
      this.router.navigate(['/feed'])
    } else {
      this.usuarioAutenticado = false;
      alert('Email ou senha incorretos')
    }
  }
}

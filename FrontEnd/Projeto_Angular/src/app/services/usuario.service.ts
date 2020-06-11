import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  enderecoDoServidor = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  obterTodos() {
    return this.http.get(this.enderecoDoServidor);
  }

  obterPorId(id: number) {
    return this.http.get(this.enderecoDoServidor + '/' + id);
  }

  cadastrarUsuario(usuario: Usuario) {
    return this.http.post(this.enderecoDoServidor, usuario);
  }

  attDadosUsuario(usuario: Usuario) {
    return this.http.put(this.enderecoDoServidor, usuario);
  }

  deletarUsuario(id: number) {
    return this.http.delete(this.enderecoDoServidor + '/' + id)
  }
}

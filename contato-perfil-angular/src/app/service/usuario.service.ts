import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient) { }

  getAllUsuario(){
    return this.http.get('http://93.188.161.223:9000/user');
  }

  postCadastro(usuario: usuario){
    return this.http.post('http://93.188.161.223:9000/user', usuario)
  }

  putAlterar(usuario: usuario){
    return this.http.put('http://93.188.161.223:9000/user', usuario)
  }
  getByIdUsuario(id:number){
    return this.http.get(`http://93.188.161.223:9000/user${id}`);
  }
  deleteUsuario(id:number){
    return this.http.delete(`http://93.188.161.223:9000/user${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endereco } from '../models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  enderecoDoServidor = 'http://localhost:8080/endereco';

  constructor(private http: HttpClient) { }

  obterTodos() {
    return this.http.get(this.enderecoDoServidor);
  }

  cadastrarEndereco(endereo: Endereco) {
    return this.http.post(this.enderecoDoServidor, endereo);
  }

  attDadosEndereco(endereo: Endereco) {
    return this.http.put(this.enderecoDoServidor, endereo);
  }

  deletarEndereco(id: number) {
    return this.http.delete(this.enderecoDoServidor + '/' + id)
  }
}

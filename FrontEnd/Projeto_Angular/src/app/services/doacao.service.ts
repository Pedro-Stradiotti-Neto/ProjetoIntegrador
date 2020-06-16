import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Doacao } from '../models/doacao';

@Injectable({
  providedIn: 'root'
})
export class DoacaoService {

  enderecoDoServidor = 'http://localhost:8080/desconto';

  constructor(private http: HttpClient) { }

  obterTodos() {
    return this.http.get(this.enderecoDoServidor);
  }

  cadastrarDoacao(doacao: Doacao) {
    return this.http.post(this.enderecoDoServidor, doacao);
  }

  attDadosDoacao(doacao: Doacao) {
    return this.http.put(this.enderecoDoServidor, doacao);
  }
}

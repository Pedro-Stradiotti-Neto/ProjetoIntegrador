import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Postagem } from '../models/Postagem'

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  url = 'http://localhost:3000/postagem';

  constructor(private http: HttpClient) { }

  getAllPostagens() {
    return this.http.get('http://localhost:3000/postagem')
  }

  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:3000/postagem', postagem)
  }

  putPostagem(postagem: Postagem) {
    return this.http.put('http://localhost:3000/postagens', postagem)
  }

  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:3000/postagem/${id}`)
  }

  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:3000/postagem/${id}`)
  }

  findByTitulo(titulo: string) {
    return this.http.get(`http://31.220.57.14:8080/postagem/titulo/${titulo}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Postagem } from '../models/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }

  getAllPostagens() {
    return this.http.get('http://localhost:8080/feed')
  }
  postPostagem(postagem: Postagem) {
    return this.http.post('http://localhost:8080/feed', postagem)
  }
  putPostagem(postagem: Postagem) {
    return this.http.put('http://localhost:8080/feed', postagem)

  }
  getByIdPostagem(id: number) {
    return this.http.get(`http://localhost:8080/feed${id}`)
  }
  deletePostagem(id: number) {
    return this.http.delete(`http://localhost:8080/feed${id}`)

  }
}

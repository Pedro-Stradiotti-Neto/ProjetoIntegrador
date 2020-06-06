import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../services/postagem.service';
import { Postagem } from '../models/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  listaPostagens: Postagem[]
  postagem: Postagem = new Postagem
  alerta: boolean = false
  titulo: string

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findAllPostagens()

    let item: string = localStorage.getItem('delOk')
    if (item == "true") {
      this.alerta = true
      localStorage.clear()
      setTimeout(() => {
        location.assign('/feed')
      }, 3000)
    }

  }
  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      location.assign("/feed")
    })
  }
}
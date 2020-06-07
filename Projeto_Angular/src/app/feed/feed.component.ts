import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../services/postagem.service';
import { Postagem } from '../models/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'data'
  reverse = true

  listaPostagens: Postagem[]

  postagem: Postagem = new Postagem

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {
    this.findAllPostagens()

    let post: string = localStorage.getItem('excluido');

    if (post == "true") {
      alert('Postagem excluida com sucesso')
      localStorage.clear();
    }
    window.scroll(0, 0);

  }

  findAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  publicar() {
    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      location.assign('/feed')
    });
  }

  btnExcluir(postagem: Postagem) {
    this.postagem = postagem;
  }

  btnSim() {
    this.postagemService.deletePostagem(this.postagem.id).subscribe(() => {
      location.assign('/feed');
      localStorage.setItem('excluido', 'true')
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Endereco } from '../models/endereco';
import { Doacao } from '../models/doacao';
import { UsuarioService } from '../services/usuario.service';
import { EnderecoService } from '../services/endereco.service';
import { DoacaoService } from '../services/doacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modals-listagem',
  templateUrl: './modals-listagem.component.html',
  styleUrls: ['./modals-listagem.component.css']
})
export class ModalsListagemComponent implements OnInit {

  @Input() usuario: Usuario;
  @Input() endereco: Endereco;
  @Input() doacao: Doacao;

  constructor(private usuarioService: UsuarioService, private enderecoService: EnderecoService, private doacaoService: DoacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  btnSimUsuario() {
    this.usuarioService.deletarUsuario(this.usuario.codigo).subscribe(() => {
      location.assign('/usuarios');
      localStorage.setItem('delUsuarioOk', 'true');
    })
  }

  btnSimEndereco() {
    this.enderecoService.deletarEndereco(this.endereco.codigo).subscribe(() => {
      location.assign('/usuarios');
      localStorage.setItem('delEnderecoOk', 'true')
    })
  }
}

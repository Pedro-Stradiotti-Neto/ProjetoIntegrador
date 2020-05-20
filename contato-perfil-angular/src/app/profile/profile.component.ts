import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { ActivatedRoute } from '@angular/router';
import { ListarService } from '../service/listar.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  choose: boolean = false;

  constructor(private route: ActivatedRoute, private listarService: ListarService) { }

  ngOnInit() {
    localStorage.setItem('escolha', String(this.choose))
    this.editar();
  }


  editar() {
    let propFieldset = document.querySelector("fieldset");
    let propEdit = <HTMLInputElement>document.getElementById("save");
    let choose = localStorage.getItem('escolha')

    if (choose == 'true') {
      propFieldset.disabled = false;
      propEdit.disabled = false;
      localStorage.setItem('escolha', 'false');
    } else {
      propFieldset.disabled = true;
      propEdit.disabled = true;
      localStorage.setItem('escolha', 'true');
    }
  }

}

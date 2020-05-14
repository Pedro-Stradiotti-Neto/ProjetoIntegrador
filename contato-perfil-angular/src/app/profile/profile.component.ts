import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  choose: boolean = false;
  user: User = new User;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.getUser(id);
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

  getUser(id: number) {
    this.userService.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp;
    })
  }
}

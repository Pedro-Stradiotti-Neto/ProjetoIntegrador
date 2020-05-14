import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  listUsers: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.findAllUsers()
  }

  findAllUsers() {
    this.userService.getAllUsers().subscribe((resp: User[]) => {
      this.listUsers = resp;
    })
  }
}

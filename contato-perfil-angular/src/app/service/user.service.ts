import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get('http://93.188.161.223:9000/user');
  }

  getByIdUser(id: number) {
    return this.http.get(`http://93.188.161.223:9000/user/${id}`)
  }


}

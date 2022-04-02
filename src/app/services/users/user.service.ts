import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsers } from 'src/app/models/iusers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers():any{
    return this.http.get<IUsers[]>('http://localhost:3000/users');
  }

  getUser(id:number){
    return this.http.get<IUsers>('http://localhost:3000/users/'+id);
  }

  addUser(user:IUsers){
    return this.http.post<IUsers>('http://localhost:3000/users',user);
  }

  updateUser(user:IUsers){
    return this.http.put('http://localhost:3000/users/'+user.id,user);
  }

  deleteUser(id:number){
    return this.http.delete('http://localhost:3000/users/'+id);
  }
}

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../services/users/user.service';
import {IUsers} from 'src/app/models/iusers';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users : IUsers[] = [];

  getUsers(){
    this.userService.getUsers()
      .subscribe((users: IUsers[]) => {this.users = users;
        console.log(this.users);
      })
  }

  email ="";
  password ="";

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);


  login() {
    if (this.email == "" || this.password == "") {
      return alert("Please fill all the fields");
    } else {

      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email == this.email && this.users[i].password == this.password) {
          this._snackBar.open("You are logged successfully", "close");
          this.router.navigate(['/home']);
          break;
        } else {
          return alert("Email or password is incorrect");
        }
      }
    }

  }


}

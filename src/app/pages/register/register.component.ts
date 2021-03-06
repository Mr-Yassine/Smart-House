import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/users/user.service';
import { IUsers } from 'src/app/models/iusers';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import * as uuid from 'uuid';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nameFormControl = new FormControl('', [Validators.required]);
  phoneFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);

  

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
  


 
  MyUser: IUsers = {
    id : uuid.v4(),
    name: '',
    phone: '',
    email: '',
    password: ''
  }

  
  register() {

    if (this.MyUser.name != '' && this.MyUser.phone != '' && this.MyUser.email != '' && this.MyUser.password != '') {

      for (let i = 0; i < this.users.length; i++) {

        if (this.users[i].email == this.MyUser.email) {
          return alert('Email already exist');
        } else {
          this.userService.addUser(this.MyUser)
            .subscribe((user) => {
              this.users = [user, ...this.users];
          })

          this.MyUser.id = uuid.v4();
          this.MyUser.name = '';
          this.MyUser.phone = '';
          this.MyUser.email = '';
          this.MyUser.password = '';

          this._snackBar.open("User registred successfully", "close");

          this.router.navigateByUrl("/login")
        }
        
      }
      
    } else {
      return alert('Please fill all the fields');
    }

  }



}

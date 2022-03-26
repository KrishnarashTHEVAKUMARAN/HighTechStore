import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Users} from "./users";
import {UsersService} from "./users.service";
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public users: Users[] = [];
  userForm: FormGroup;

  constructor(private usersService: UsersService, private formBuilder: FormBuilder) {
    this.userForm = formBuilder.group({
      email: formBuilder.control('', Validators.required),
      password: formBuilder.control('', Validators.required),
    });
  }

  ngOnInit(){
    this.getUsers();
    this.userForm.reset({title: '',password: ''});
  }

  public getUsers(): void {
    this.usersService.getUsers().subscribe(
      (response: Users[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddUsers(userForm: FormGroup): void{
    this.usersService.addUsers(userForm.value).subscribe(
      (response: Users[]) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse ) => {
        alert(error.message);
      }
    );
  }

}

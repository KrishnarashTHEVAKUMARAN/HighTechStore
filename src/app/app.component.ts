import {Component, OnInit} from '@angular/core';
import {Users} from "./users";
import {UsersService} from "./users.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'HighTechStore';
  public users: Users[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(){
    this.getUsers();
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
}

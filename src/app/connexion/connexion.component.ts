import { Component, OnInit } from '@angular/core';
import {UsersService} from "./users.service";
import {Users} from "./users";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  public users: Users = {} as Users;

  constructor(private usersService : UsersService) { }

  ngOnInit(): void {

  }

  public userLogin(users: Users){
    console.log(users)
    this.usersService.loginUsers(users).subscribe(data =>{
      alert("Connecté")
    },error => alert("Entrez le bon email et le bon mot de passe"))
  }

}

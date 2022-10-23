import { Component, OnInit } from '@angular/core';
import {AuthexpertServiceService} from "../services/authexpert.service";
import {Router} from "@angular/router";
import {Expert} from "../common/Expert";
import {LoginRequest} from "../common/LoginRequest";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest:LoginRequest=new LoginRequest();
  typeutilisateur:string="1";

  constructor(private authexpert: AuthexpertServiceService,private route : Router) { }

  ngOnInit(): void {
  }

  loginExpert() {
    let authFlow = this.authexpert
      .login(this.loginRequest);
    // .pipe(switchMap((e) => this.auth.profile(e.id)));

    authFlow.subscribe({
      next: (user: Expert) => {

        this.authexpert.saveUserToLocalStorage(user);
        console.log("bon");
        console.log(user);
        if(this.authexpert.isExpertIn) {
          this.route.navigate(['back']);
        }


      },
      error: (error) => {
        /*this.messageService.add({severity:'error', summary: 'Error!', detail: 'Username ou Password Erroné '});*/
console.log("errrrrr")
        setTimeout(()=>{
          /*window.location.reload();*/
        },2000);
      },
    });
  }


}

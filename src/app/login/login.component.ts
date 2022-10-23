import { Component, OnInit } from '@angular/core';
import {AuthexpertServiceService} from "../services/authexpert.service";
import {Router} from "@angular/router";
import {Expert} from "../common/Expert";
import {LoginRequest} from "../common/LoginRequest";
import {Responsable} from "../common/Responsable";
import {AuthadminServiceService} from "../services/authadmin.service";
import {AuthresponsableServiceService} from "../services/authresponsable.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest:LoginRequest=new LoginRequest();
  typeutilisateur:string="1";

  constructor(private authexpert: AuthexpertServiceService,private route : Router,private authAdmin:AuthadminServiceService,private authresponsable:AuthresponsableServiceService) { }

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


  loginAdmin(){

    let authFlow = this.authAdmin
      .login(this.loginRequest);
    // .pipe(switchMap((e) => this.auth.profile(e.id)));

    authFlow.subscribe({
      next: (user: Expert) => {

        this.authAdmin.saveUserToLocalStorage(user);
        console.log("bon");
        console.log(user);
        if(this.authAdmin.isAdminIn) {
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

  loginResponsable(){

    let authFlow = this.authresponsable
      .login(this.loginRequest);
    // .pipe(switchMap((e) => this.auth.profile(e.id)));

    authFlow.subscribe({
      next: (user: Responsable) => {

        this.authresponsable.saveUserToLocalStorage(user);
        console.log("bon");
        console.log(user);
        if(this.authresponsable.isResponsableIn) {
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back.component';
import {LoginComponent} from "../login/login.component";
import {ExpertAddComponent} from "./expert/expert-add/expert-add.component";

const routes: Routes = [{
  path: '', component: BackComponent,
  children: [
    {path: 'ajoutexpert', component: ExpertAddComponent},


  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRoutingModule { }

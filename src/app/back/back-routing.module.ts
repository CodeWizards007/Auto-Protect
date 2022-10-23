import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BackComponent } from './back.component';
import {LoginComponent} from "../login/login.component";
import {ExpertAddComponent} from "./expert/expert-add/expert-add.component";
import {CreateResponsableComponent} from "./create-responsable/create-responsable.component";
import {CreateAssureurComponent} from "./create-assureur/create-assureur.component";
import {AdminStatsComponent} from "./admin-stats/admin-stats.component";

const routes: Routes = [{
  path: '', component: BackComponent,
  children: [
    {path: 'ajoutResponsable', component: CreateResponsableComponent},
    {path: 'ajoutexpert', component: ExpertAddComponent},
    {path: 'ajoutAssureur', component: CreateAssureurComponent},
    {path: 'adminStats', component: AdminStatsComponent},

  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackRoutingModule { }

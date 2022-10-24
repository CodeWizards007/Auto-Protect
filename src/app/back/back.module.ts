import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { BackComponent } from './back.component';
import { ConstatComponent} from './Constat/constat.component';

import {MenuComponent} from "./menu/menu.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {PreloaderComponent} from "./preloader/preloader.component";
import { ExpertAddComponent } from './expert/expert-add/expert-add.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { ListConstatComponent } from './list-constat/list-constat.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateResponsableComponent} from "./create-responsable/create-responsable.component";

@NgModule({
  declarations: [
    BackComponent,
    ConstatComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    ExpertAddComponent,
    CreateAdminComponent,
    ListConstatComponent,
    CreateResponsableComponent
  ],
  imports: [
    CommonModule,
    BackRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class BackModule { }

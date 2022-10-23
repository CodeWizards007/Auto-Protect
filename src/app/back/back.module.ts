import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackRoutingModule } from './back-routing.module';
import { BackComponent } from './back.component';
import {MenuComponent} from "./menu/menu.component";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {PreloaderComponent} from "./preloader/preloader.component";
import { ExpertAddComponent } from './expert/expert-add/expert-add.component';

@NgModule({
  declarations: [
    BackComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    ExpertAddComponent,
  ],
  imports: [
    CommonModule,
    BackRoutingModule
  ]
})
export class BackModule { }

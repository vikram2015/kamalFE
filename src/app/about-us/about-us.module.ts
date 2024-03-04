import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUSRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    AboutUSRoutingModule,
    ButtonModule
  ]
})
export class AboutUSModule { }

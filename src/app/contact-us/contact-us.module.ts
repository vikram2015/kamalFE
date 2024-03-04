import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUSRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    ContactUSRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    ButtonModule
  ],
})
export class ContactUSModule {}

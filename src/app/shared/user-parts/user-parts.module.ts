import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailFormFieldComponent } from './components/email-form-field/email-form-field.component';
import {MatFormFieldModule, MatInputModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EmailFormFieldComponent],
  exports: [
    EmailFormFieldComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class UserPartsModule { }

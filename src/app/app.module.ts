import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasswordStrengthComponent } from './password-checker/password-strength/password-strength.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PasswordCheckerComponent } from './password-checker/password-checker.component';
import { PasswordInputComponent } from './password-checker/password-input/password-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordStrengthComponent,
    PasswordCheckerComponent,
    PasswordInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

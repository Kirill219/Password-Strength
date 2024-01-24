import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-password-checker',
  templateUrl: './password-checker.component.html',
  styleUrls: ['./password-checker.component.css']
})
export class PasswordCheckerComponent {
  password = '';
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: '',
    });
  }

  onPasswordChange(password: string): void {
    this.password = password;
  }
}

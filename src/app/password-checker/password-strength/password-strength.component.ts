import {Component, Input} from '@angular/core';
import {PasswordStrengthService} from "./password-strength.service";

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  @Input() password: string = '';

  constructor(private passwordStrengthService: PasswordStrengthService) {}

  getSections(): string[] {
    return this.passwordStrengthService.getPasswordStrength(this.password);
  }
}

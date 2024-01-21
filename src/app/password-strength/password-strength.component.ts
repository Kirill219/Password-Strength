import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
  password: string = '';

  getSections(): string[] {
    const sections: string[] = [];

    if (!this.password || this.password.length === 0) {
      return ['gray', 'gray', 'gray'];
    }

    if (this.password.length < 8) {
      return ['red', 'red', 'red'];
    }

    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /\d/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (hasLetters && hasNumbers && hasSymbols) {
      sections.push('green', 'green', 'green');
    } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
      sections.push('yellow', 'yellow', 'gray');
    } else {
      sections.push('red', 'gray', 'gray');
    }

    return sections;
  }
}

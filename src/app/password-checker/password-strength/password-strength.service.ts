import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordStrengthService {
  getPasswordStrength(password: string): string[] {
    const sections: string[] = [];

    if (!password || password.length === 0) {
      return ['gray', 'gray', 'gray'];
    }

    if (password.length < 8) {
      return ['red', 'red', 'red'];
    }

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);

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

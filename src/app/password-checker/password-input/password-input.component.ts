import { Component, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordInputComponent),
      multi: true,
    },
  ],
})
export class PasswordInputComponent implements ControlValueAccessor {
  password = '';

  private onChange: (value: string) => void = () => {};

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(): void {}

  writeValue(value: string): void {
    this.password = value;
  }

  onInput(): void {
    this.onChange(this.password);
  }
}

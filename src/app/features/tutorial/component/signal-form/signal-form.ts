import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { form, FormField, required, email, submit } from '@angular/forms/signals';

interface LoginData {
  email: string,
  password: string,
  rememberMe: boolean
}

@Component({
  selector: 'app-signal-form',
  imports: [FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalForm {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
    rememberMe: false
  });

  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, {message: 'Email is required'});
    email(fieldPath.email, {message: 'Enter a valid email address'});
    required(fieldPath.password, {message: 'Password is required'});
  });

  onSubmit(event: Event) {
    event.preventDefault();

    submit(this.loginForm, async() => {
      const credentials = this.loginModel();
      console.log('Logging in with: ', credentials);
    })
  }
}

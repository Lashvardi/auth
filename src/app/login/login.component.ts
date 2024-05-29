import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private _authService: AuthService) {}

  loginAction() {
    this._authService.login(this.email, this.password).subscribe((data) => {
      // ტოკენი უნდა დავიმახსოვროთ რადგან ის გვესაჭიროება ყველა მომავალ რექუესთში'
      console.log(data);
      localStorage.setItem("token", data.access_token);
    });
  }
}

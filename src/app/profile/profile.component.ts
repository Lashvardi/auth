import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profileData: any;
  constructor(private _authService: AuthService) {
    this._authService.getProfile().subscribe((data) => {
      console.log(data);
    });
  }
}

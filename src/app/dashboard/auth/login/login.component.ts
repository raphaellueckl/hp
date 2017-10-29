import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {routerTransition} from '../../router.transition';
import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {LoginDto} from './login-dto';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent {

  private readonly USERNAME = 'username';
  private readonly PASSWORD = 'password';

  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  wrongCredentialsInserted: boolean;

  constructor(public fb: FormBuilder,
              public authService: AuthService,
              public location: Location) {

    this.myForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.username = this.myForm.controls[this.USERNAME];
    this.password = this.myForm.controls[this.PASSWORD];
    this.wrongCredentialsInserted = false;
  }

  onSubmit(login: LoginDto): void {
    console.log(`User '${login.username}' attempts to login...`);
    if (this.authService.login(login.username, login.password)) {
      this.location.back();
    } else {
      this.wrongCredentialsInserted = true;
    }
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }

}

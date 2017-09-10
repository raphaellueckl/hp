import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';
import {routerTransition} from '../../router.transition';
import { Component } from '@angular/core';
import {AuthService} from '../../../auth.service';
import {LoginDto} from './login-dto';
import {Location} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent {

  private readonly USERNAME: string = 'username';
  private readonly PASSWORD: string = 'password';

  myForm: FormGroup;
  username: AbstractControl;
  password: AbstractControl;

  message: string;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public location: Location
  ) {
    this.message = '';

    this.myForm = fb.group({
      username:  ['', Validators.required],
      password: ['', Validators.required]
    });

    this.username = this.myForm.controls[this.USERNAME];
    this.password = this.myForm.controls[this.PASSWORD];
  }

  onSubmit(login: LoginDto): void {
    console.log(`User '${login.username}' attempts to login...`);
    this.authService.login(login.username, login.password);
    // this.location.go('/');
    this.location.back();
  }

  login(username: string, password: string): boolean {
    this.message = '';
    if (!this.authService.login(username, password)) {
      this.message = 'Incorrect credentials.'; setTimeout(
        function() {
          this.message = '';
        }.bind(this), 2500);
    }
    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}

function skuValidator(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^123/)) {
    return {invalidSku: true};
  }
}

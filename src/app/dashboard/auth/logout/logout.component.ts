import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private location: Location) { }

  ngOnInit() {
    this.auth.logout();
    this.location.back();
  }

}

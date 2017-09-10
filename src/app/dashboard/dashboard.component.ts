import { Component, OnInit } from '@angular/core';
import {routerTransition} from './router.transition';
import {Http} from '@angular/http';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() { }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

}

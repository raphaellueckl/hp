import {Component, OnInit} from '@angular/core';
import {routerTransition} from './router.transition';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

}

import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.transition';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css'],
  animations: [routerTransition()]
})
export class DonationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.transition';
import {Location} from '@angular/common';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  animations: [routerTransition()]
})
export class OverviewComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

}

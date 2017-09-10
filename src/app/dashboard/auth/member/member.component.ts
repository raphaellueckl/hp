import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../router.transition';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  animations: [routerTransition()]
})
export class MemberComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

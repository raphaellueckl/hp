import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.transition';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  animations: [routerTransition()]
})
export class GithubComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

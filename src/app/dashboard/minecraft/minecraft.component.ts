import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.transition';

@Component({
  selector: 'app-minecraft',
  templateUrl: './minecraft.component.html',
  styleUrls: ['./minecraft.component.css'],
  animations: [routerTransition()]
})
export class MinecraftComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    try {
      (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
    } catch (e) {
      console.error('Ad error');
    }
  }

}

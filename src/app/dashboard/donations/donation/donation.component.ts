import {Component, Input, OnInit} from '@angular/core';
import {DonationItem} from './donation-item';

@Component({
  selector: 'app-donation-entry',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  @Input()
  donationInfo: DonationItem;

  constructor() {
  }

  ngOnInit() {
  }

}

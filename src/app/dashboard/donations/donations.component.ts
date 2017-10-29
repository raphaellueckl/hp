import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.transition';
import {DonationItem} from './donation/donation-item';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css'],
  animations: [routerTransition()]
})
export class DonationsComponent implements OnInit {

  donationSources: DonationItem[];

  constructor() {
    this.donationSources = [
      new DonationItem(
        'assets/images/donations/nem_logo.svg',
        'assets/images/donations/nem_wallet.svg',
        'NEM Wallet',
        'NBBE5D-HXFSES-U3IQ4L-TJQ6I7-WP4E22-HBVRE6-ZXFV'),
      new DonationItem(
        'assets/images/donations/iota_logo.svg',
        'assets/images/donations/iota_wallet.svg',
        'IOTA Wallet',
        'IMLENCETOOMOROPMWCTWFDYR9MXNGEEGGJSTUAAMB9V9WMJWGMLRZSFXAKXPVBFROASHPXQCBIBEDFJMBEWRZGZ99X'),
      new DonationItem(
        'assets/images/donations/btc_logo.svg',
        'assets/images/donations/btc_wallet.svg',
        'Bitcoin Wallet',
        '32o6kbgZqJ9nhT2aRsfEGcMtpThJ2za89T'),
      new DonationItem(
        'assets/images/donations/ltc_logo.svg',
        'assets/images/donations/ltc_wallet.svg',
        'Litecoin Wallet',
        'LgfSNjqVpXFj9xN8ZWPR9qTZQJpcRRNXRZ')
    ];
  }

  ngOnInit() {
  }


}

import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-spending-mgmt',
  templateUrl: './spending-mgmt.component.html',
  styleUrls: ['./spending-mgmt.component.scss']
})
export class SpendingMgmtComponent implements OnInit {
  @ViewChild('fullpageRef') fp_directive!: ElementRef;
  config;
  fullpage_api = undefined;


  constructor() {
    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['enter', 'statistics'],
      menu: '#menu',
      navigation: true,
    };
  }

  ngOnInit(): void {
  }

  getRef(fullPageRef: any) {
    this.fullpage_api = fullPageRef;
  }

}

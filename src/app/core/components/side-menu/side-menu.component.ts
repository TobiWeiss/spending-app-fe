import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  public menuEntries: Array<{ icon: string, label: string, path: string }> = [];

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.menuEntries = [
      {icon: "pi-money-bill", label: "Eintragen", path: "spending#enter"},
      {icon: "pi-history", label: "Historie", path: "spending#history"},
      {icon: "pi-chart-line", label: "Statistik", path: "spending"}
    ]
  }

}

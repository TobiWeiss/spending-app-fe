import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Route, Router} from "@angular/router";
import {exportedRoutes} from "../../../app-routing.module";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  public menuEntries: Array<{ icon: string, label: string, path: string }> = [];
  public activeRoute: Route = exportedRoutes[0];
  public showLogo: string = "start";

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.menuEntries = [
      {icon: "pi-money-bill", label: "Eintragen", path: "spending"},
      {icon: "pi-history", label: "Historie", path: "history"},
      {icon: "pi-chart-line", label: "Statistik", path: "statistics"}
    ]

    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        this.activeRoute = exportedRoutes.filter(route => `/${route.path}` === routerEvent.url)[0];
      }
    })


  }

}

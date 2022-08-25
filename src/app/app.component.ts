import {Component, HostListener} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";
import {slider} from "./routing-animation";
import {exportedRoutes} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
})
export class AppComponent {
  title = 'spending-app';

  constructor(private router: Router) {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  @HostListener('document:mousewheel', ['$event']) // for window scroll events
  async onScroll(event: Event) {
    if (!event) return;
    const wheelEvent = event as WheelEvent;
    const currentUrl = this.router.routerState.snapshot.url;
    if (wheelEvent.deltaY < 0) {
      const previousRoute = exportedRoutes[exportedRoutes.findIndex(route => `/${route.path}` === currentUrl) - 1
      >= 0
        ? exportedRoutes.findIndex(route => `/${route.path}` === currentUrl) - 1
        : exportedRoutes.length - 1
        ]
      await this.router.navigateByUrl(`/${previousRoute.path}`);
      return;
    }

    const nextRoute = exportedRoutes[exportedRoutes.findIndex(route => `/${route.path}` === currentUrl) + 1 < exportedRoutes.length
      ? exportedRoutes.findIndex(route => `/${route.path}` === currentUrl) + 1
      : 0]
    await this.router.navigateByUrl(`/${nextRoute.path}`);
  }
}

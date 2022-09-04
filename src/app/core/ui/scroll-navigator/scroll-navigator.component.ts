import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Route, Router, RouterOutlet} from "@angular/router";
import {exportedRoutes} from "../../../app-routing.module";
import {slider} from "../../../routing-animation";

@Component({
  selector: 'app-scroll-navigator',
  templateUrl: './scroll-navigator.component.html',
  styleUrls: ['./scroll-navigator.component.scss'],
  animations: [
    slider
  ],
  host: {
    '[@routeAnimation]': ""
  }
})
export class ScrollNavigatorComponent implements OnInit {
  public isRouteAnimationComplete!: boolean;
  @Input()
  outlet!: RouterOutlet


  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  setRouteAnimationDone() {
    this.isRouteAnimationComplete = true;
  }

  @HostListener('document:mousewheel', ['$event'])
  async onScroll(event: Event) {
    const wheelEvent = event as WheelEvent;
    if (!wheelEvent || !this.isRouteAnimationComplete) return;
    this.isRouteAnimationComplete = false;
    const currentUrl = this.router.routerState.snapshot.url;
    if (this.isScrollingDown(wheelEvent)) {
      const previousRoute = this.getPreviousRoute(currentUrl);
      await this.router.navigateByUrl(`/${previousRoute.path}`);
      return;
    }

    const nextRoute = this.getNextRoute(currentUrl);
    await this.router.navigateByUrl(`/${nextRoute.path}`);
  }

  async onSwipe(event: Event) {
    const wheelEvent = event as WheelEvent;
    if (!wheelEvent || !this.isRouteAnimationComplete) return;
    this.isRouteAnimationComplete = false;
    const currentUrl = this.router.routerState.snapshot.url;
    if (this.isSwipingDown(wheelEvent)) {
      const previousRoute = this.getPreviousRoute(currentUrl);
      await this.router.navigateByUrl(`/${previousRoute.path}`);
      return;
    }

    const nextRoute = this.getNextRoute(currentUrl);
    await this.router.navigateByUrl(`/${nextRoute.path}`);
  }

  private getPreviousRoute(currentUrl: string): Route {
    const INDEX_OF_LAST_ROUTE = exportedRoutes.length - 1;

    return exportedRoutes[this.hasPreviousRoute(currentUrl)
      ? this.getIndexOfPreviousRoute(currentUrl)
      : INDEX_OF_LAST_ROUTE
      ]
  }

  private hasPreviousRoute(currentUrl: string): boolean {
    return exportedRoutes.findIndex(route => `/${route.path}` === currentUrl) - 1 >= 0
  }

  private getIndexOfPreviousRoute(currentUrl: string): number {
    return exportedRoutes.findIndex(route => `/${route.path}` === currentUrl) - 1;
  }

  private getNextRoute(currentUrl: string): Route {
    const INDEX_OF_FIRST_ROUTE = 0;

    return exportedRoutes[this.hasNextRoute(currentUrl)
      ? this.getIndexOfNextRoute(currentUrl)
      : INDEX_OF_FIRST_ROUTE];
  }

  private hasNextRoute(currentUrl: string): boolean {
    return exportedRoutes.findIndex(route => `/${route.path}` === currentUrl) + 1 < exportedRoutes.length
  }

  private getIndexOfNextRoute(currentUrl: string): number {
    return exportedRoutes.findIndex(route => `/${route.path}` === currentUrl) + 1
  }

  private isSwipingDown(event: WheelEvent): boolean {
    return event.deltaY > 0;
  }

  private isScrollingDown(event: WheelEvent): boolean {
    return event.deltaY < 0
  }


}

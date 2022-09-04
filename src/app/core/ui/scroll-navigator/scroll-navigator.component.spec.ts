import {Router, RouterOutlet} from "@angular/router";
import {exportedRoutes} from "../../../app-routing.module";
import {ScrollNavigatorComponent} from "./scroll-navigator.component";

describe('ScrollNavigatorComponent', () => {
  let scrollNavigatorComponent: ScrollNavigatorComponent;
  let router: Router;

  beforeEach(async () => {
    router = {
      outlet: {activatedRouteData: {animation: null}},
      routerState: {snapshot: {url: `/${exportedRoutes[0].path}`}},
      navigateByUrl: function (url: string) {
        return new Promise((resolve) => {
            // @ts-ignore
            this!.routerState!.snapshot.url = url;
            resolve(url)
          }
        )
      },
    } as unknown as Router
    scrollNavigatorComponent = new ScrollNavigatorComponent(router);
    scrollNavigatorComponent.outlet = {} as unknown as RouterOutlet;
    scrollNavigatorComponent.isRouteAnimationComplete = true;
  });

  it('should create the component', () => {
    expect(scrollNavigatorComponent).toBeDefined()
  });

  it("should navigate to another route in case of a scroll event", () => {
    const spy = spyOn(router, 'navigateByUrl');
    const mockEvent: Event = {deltaY: 100} as unknown as Event;
    scrollNavigatorComponent.onScroll(mockEvent);

    expect(spy).toHaveBeenCalled();
  })

  it("should navigate to the previous route if the user scrolls upwards", () => {
    const spy = spyOn(router, 'navigateByUrl');
    const mockEvent: Event = {deltaY: 100} as unknown as Event;
    scrollNavigatorComponent.onScroll(mockEvent);

    expect(spy).toHaveBeenCalledWith(`/${exportedRoutes[1].path!}`);
  })

  it("should navigate to the previous route if the user scrolls downwards", () => {
    const spy = spyOn(router, 'navigateByUrl');
    const mockEvent: Event = {deltaY: -100} as unknown as Event;
    scrollNavigatorComponent.onScroll(mockEvent);

    expect(spy).toHaveBeenCalledWith(`/${exportedRoutes[exportedRoutes.length - 1].path!}`);
  })

  it("should navigate to the initial route if the user scrolls upwards while being on the last route", () => {
    const spy = spyOn(router, 'navigateByUrl').and.callThrough();
    const mockEvent: Event = {deltaY: 100} as unknown as Event;
    scrollNavigatorComponent.onScroll(mockEvent);
    scrollNavigatorComponent.isRouteAnimationComplete = true;
    scrollNavigatorComponent.onScroll(mockEvent);
    scrollNavigatorComponent.isRouteAnimationComplete = true;
    scrollNavigatorComponent.onScroll(mockEvent);

    expect(spy).toHaveBeenCalledWith(`/${exportedRoutes[0].path!}`);
  })

  it("should navigate to the last route if the user scrolls downwards while being on the initial route", () => {
    const spy = spyOn(router, 'navigateByUrl');
    const mockEvent: Event = {deltaY: -100} as unknown as Event;
    scrollNavigatorComponent.onScroll(mockEvent);

    expect(spy).toHaveBeenCalledWith(`/${exportedRoutes[exportedRoutes.length - 1].path!}`);
  })

  it("should navigate to another route in case of a swipe event", () => {
    const spy = spyOn(router, 'navigateByUrl');
    const mockEvent: Event = {deltaY: 100} as unknown as Event;
    scrollNavigatorComponent.onSwipe(mockEvent);

    expect(spy).toHaveBeenCalled();
  })

  it("should navigate to the next route if the user swipes upwards", () => {
    const spy = spyOn(router, 'navigateByUrl');
    const mockEvent: Event = {deltaY: -100} as unknown as Event;
    scrollNavigatorComponent.onSwipe(mockEvent);

    expect(spy).toHaveBeenCalledWith(`/${exportedRoutes[1].path!}`);
  })

  it("should navigate to the previous route if the user swipes downwards", () => {
    const spy = spyOn(router, 'navigateByUrl');
    const mockEvent: Event = {deltaY: 100} as unknown as Event;
    scrollNavigatorComponent.onSwipe(mockEvent);

    expect(spy).toHaveBeenCalledWith(`/${exportedRoutes[exportedRoutes.length - 1].path!}`);
  })

  it("should navigate to the initial route if the user swipes upwards while being on the last route", () => {
    const spy = spyOn(router, 'navigateByUrl').and.callThrough();
    const mockEvent: Event = {deltaY: -100} as unknown as Event;
    scrollNavigatorComponent.onSwipe(mockEvent);
    scrollNavigatorComponent.isRouteAnimationComplete = true;
    scrollNavigatorComponent.onSwipe(mockEvent);
    scrollNavigatorComponent.isRouteAnimationComplete = true;
    scrollNavigatorComponent.onSwipe(mockEvent);

    expect(spy).toHaveBeenCalledWith(`/${exportedRoutes[0].path!}`);
  })

  it("should navigate to the last route if the user swipes downwards while being on the initial route", () => {
    const spy = spyOn(router, 'navigateByUrl');
    const mockEvent: Event = {deltaY: 100} as unknown as Event;
    scrollNavigatorComponent.onSwipe(mockEvent);

    expect(spy).toHaveBeenCalledWith(`/${exportedRoutes[exportedRoutes.length - 1].path!}`);
  })
});

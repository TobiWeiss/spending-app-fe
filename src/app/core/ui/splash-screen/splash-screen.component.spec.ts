import {SplashScreenComponent} from './splash-screen.component';
import {fakeAsync, flush, tick} from "@angular/core/testing";


fdescribe('SplashScreenComponent', () => {
  let component: SplashScreenComponent = new SplashScreenComponent();

  beforeEach(async () => {
    component = new SplashScreenComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set distanceToTop to the innerHeight of the window after ${component!.TIME_UNTIL_SPLASH_SCREEN_STARTS_TO_DISAPPEAR} ms`, fakeAsync(() => {
    component.ngOnInit();
    tick(component.TIME_UNTIL_SPLASH_SCREEN_STARTS_TO_DISAPPEAR);
    expect(component.distanceToTop).toEqual(`${window.innerHeight}px`);
    flush();
  }));
  it(`should disappear after an additional ${component!.ADDITIONAL_TIME_UNTIL_SPLASH_SCREEN_FINALLY_DISAPPEARS} ms`, fakeAsync(() => {
    component.ngOnInit();
    tick(component.TIME_UNTIL_SPLASH_SCREEN_STARTS_TO_DISAPPEAR + component.ADDITIONAL_TIME_UNTIL_SPLASH_SCREEN_FINALLY_DISAPPEARS);
    expect(component.showSplash).toEqual(false);
    flush();
  }));
});

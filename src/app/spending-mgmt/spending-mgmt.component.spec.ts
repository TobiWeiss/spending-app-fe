import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingMgmtComponent } from './spending-mgmt.component';

describe('SpendingMgmtComponent', () => {
  let component: SpendingMgmtComponent;
  let fixture: ComponentFixture<SpendingMgmtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendingMgmtComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendingMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

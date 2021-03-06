import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPieComponent } from './app-pie.component';

describe('AppPieComponent', () => {
  let component: AppPieComponent;
  let fixture: ComponentFixture<AppPieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

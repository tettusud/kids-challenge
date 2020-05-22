import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OddmanHomeComponent } from './oddman-home.component';

describe('OddmanHomeComponent', () => {
  let component: OddmanHomeComponent;
  let fixture: ComponentFixture<OddmanHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OddmanHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OddmanHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

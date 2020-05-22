import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellingHomeComponent } from './spelling-home.component';

describe('SpellingHomeComponent', () => {
  let component: SpellingHomeComponent;
  let fixture: ComponentFixture<SpellingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

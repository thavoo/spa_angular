import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroefirtComponent } from './heroefirt.component';

describe('HeroefirtComponent', () => {
  let component: HeroefirtComponent;
  let fixture: ComponentFixture<HeroefirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroefirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroefirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

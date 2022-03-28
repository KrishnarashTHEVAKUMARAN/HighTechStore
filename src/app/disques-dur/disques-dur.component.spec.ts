import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisquesDurComponent } from './disques-dur.component';

describe('DisquesDurComponent', () => {
  let component: DisquesDurComponent;
  let fixture: ComponentFixture<DisquesDurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisquesDurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisquesDurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

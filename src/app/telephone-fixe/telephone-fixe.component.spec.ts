import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneFixeComponent } from './telephone-fixe.component';

describe('TelephoneFixeComponent', () => {
  let component: TelephoneFixeComponent;
  let fixture: ComponentFixture<TelephoneFixeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelephoneFixeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneFixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

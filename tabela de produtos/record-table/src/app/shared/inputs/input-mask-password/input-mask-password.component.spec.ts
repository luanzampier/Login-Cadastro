import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMaskPasswordComponent } from './input-mask-password.component';

describe('InputMaskPasswordComponent', () => {
  let component: InputMaskPasswordComponent;
  let fixture: ComponentFixture<InputMaskPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMaskPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMaskPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

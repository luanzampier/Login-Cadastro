import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMaskLoginComponent } from './input-mask-login.component';

describe('InputMaskLoginComponent', () => {
  let component: InputMaskLoginComponent;
  let fixture: ComponentFixture<InputMaskLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMaskLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMaskLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

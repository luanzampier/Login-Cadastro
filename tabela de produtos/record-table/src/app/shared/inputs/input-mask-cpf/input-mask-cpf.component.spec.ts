import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMaskCpfComponent } from './input-mask-cpf.component';

describe('InputMaskCpfComponent', () => {
  let component: InputMaskCpfComponent;
  let fixture: ComponentFixture<InputMaskCpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMaskCpfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMaskCpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

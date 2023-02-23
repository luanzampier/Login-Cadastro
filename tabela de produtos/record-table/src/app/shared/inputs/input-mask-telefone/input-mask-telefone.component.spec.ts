import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMaskTelefoneComponent } from './input-mask-telefone.component';

describe('InputMaskTelefoneComponent', () => {
  let component: InputMaskTelefoneComponent;
  let fixture: ComponentFixture<InputMaskTelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMaskTelefoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMaskTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

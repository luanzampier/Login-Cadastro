import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMaskNomeCompletoComponent } from './input-mask-nome-completo.component';

describe('InputMaskNomeCompletoComponent', () => {
  let component: InputMaskNomeCompletoComponent;
  let fixture: ComponentFixture<InputMaskNomeCompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMaskNomeCompletoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMaskNomeCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMaskDataNascimentoComponent } from './input-mask-data-nascimento.component';

describe('InputMaskDataNascimentoComponent', () => {
  let component: InputMaskDataNascimentoComponent;
  let fixture: ComponentFixture<InputMaskDataNascimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputMaskDataNascimentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMaskDataNascimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

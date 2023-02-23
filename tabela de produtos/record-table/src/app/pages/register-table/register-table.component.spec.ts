import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTableComponent } from './register-table.component';

describe('RegisterTableComponent', () => {
  let component: RegisterTableComponent;
  let fixture: ComponentFixture<RegisterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

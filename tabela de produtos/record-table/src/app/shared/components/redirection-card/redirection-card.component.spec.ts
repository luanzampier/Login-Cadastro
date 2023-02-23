import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectionCardComponent } from './redirection-card.component';

describe('RedirectionCardComponent', () => {
  let component: RedirectionCardComponent;
  let fixture: ComponentFixture<RedirectionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedirectionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedirectionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

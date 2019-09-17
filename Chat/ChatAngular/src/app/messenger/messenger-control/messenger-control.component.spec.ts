import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessengerControlComponent } from './messenger-control.component';

describe('MessengerControlComponent', () => {
  let component: MessengerControlComponent;
  let fixture: ComponentFixture<MessengerControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessengerControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessengerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

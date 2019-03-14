import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportesEditComponent } from './transportes-edit.component';

describe('TransportesEditComponent', () => {
  let component: TransportesEditComponent;
  let fixture: ComponentFixture<TransportesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

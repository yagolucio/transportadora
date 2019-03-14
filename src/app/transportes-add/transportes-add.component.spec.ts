import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportesAddComponent } from './transportes-add.component';

describe('TransportesAddComponent', () => {
  let component: TransportesAddComponent;
  let fixture: ComponentFixture<TransportesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

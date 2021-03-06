import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBusesComponent } from './list-buses.component';

describe('ListBusesComponent', () => {
  let component: ListBusesComponent;
  let fixture: ComponentFixture<ListBusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListBusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdmComponent } from './edit-adm.component';

describe('EditAdmComponent', () => {
  let component: EditAdmComponent;
  let fixture: ComponentFixture<EditAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

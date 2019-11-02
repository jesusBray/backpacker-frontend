import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdmComponent } from './create-adm.component';

describe('CreateAdmComponent', () => {
  let component: CreateAdmComponent;
  let fixture: ComponentFixture<CreateAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

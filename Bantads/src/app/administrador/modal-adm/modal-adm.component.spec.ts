import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdmComponent } from './modal-adm.component';

describe('ModalAdmComponent', () => {
  let component: ModalAdmComponent;
  let fixture: ComponentFixture<ModalAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

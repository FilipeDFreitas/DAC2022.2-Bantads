import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRecusarClienteComponent } from './modal-recusar-cliente.component';

describe('ModalRecusarClienteComponent', () => {
  let component: ModalRecusarClienteComponent;
  let fixture: ComponentFixture<ModalRecusarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRecusarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRecusarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

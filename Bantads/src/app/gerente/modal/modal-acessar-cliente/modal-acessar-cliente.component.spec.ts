import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAcessarClienteComponent } from './modal-acessar-cliente.component';

describe('ModalAcessarClienteComponent', () => {
  let component: ModalAcessarClienteComponent;
  let fixture: ComponentFixture<ModalAcessarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAcessarClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAcessarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

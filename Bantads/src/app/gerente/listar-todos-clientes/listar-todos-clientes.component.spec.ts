import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTodosClientesComponent } from './listar-todos-clientes.component';

describe('ListarTodosClientesComponent', () => {
  let component: ListarTodosClientesComponent;
  let fixture: ComponentFixture<ListarTodosClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTodosClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTodosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

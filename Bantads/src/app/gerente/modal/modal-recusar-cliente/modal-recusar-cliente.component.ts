import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { Cliente } from 'src/app/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GerenteService } from '../../services/gerente.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-recusar-cliente',
  templateUrl: './modal-recusar-cliente.component.html',
  styleUrls: ['./modal-recusar-cliente.component.css']
})
export class ModalRecusarClienteComponent implements OnInit {
  @ViewChild ('formRecusar') formRecusar!: NgForm;
  

  cliente: Cliente = new Cliente();

  constructor(
    public activeModal: NgbActiveModal,
    private gerenteService: GerenteService,
    private modalService: NgbModal) { }



  ngOnInit(): void {
  }

  recusar() {
    
    
    

  }

  





}

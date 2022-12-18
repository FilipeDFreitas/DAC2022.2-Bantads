import { Component, OnInit , Input, ViewChild} from '@angular/core';
import { Cliente } from 'src/app/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/services/cliente.service';
import { Conta } from 'src/app/shared';
import { GerenteService } from '../../services/gerente.service';

@Component({
  selector: 'app-modal-recusar-cliente',
  templateUrl: './modal-recusar-cliente.component.html',
  styleUrls: ['./modal-recusar-cliente.component.css']
})
export class ModalRecusarClienteComponent implements OnInit {
  @ViewChild ('formRecusar') formRecusar!: NgForm;
  cliente!: Cliente;
  loading!: boolean;

 

  constructor(
    public gerenteService: GerenteService,
    public activeModal: NgbActiveModal,
    private route: ActivatedRoute,
    private router: Router
    ) { }



  ngOnInit(): void {
        
  
  }

  recusar(): void {
    this.loading = true;
    if(this.formRecusar.form.valid){

      this.cliente.conta!.dataAprovOuReprov = new Date();
      console.log(this.cliente.conta!.motivoReprovacao);
      console.log("chegou no modal");
      this.gerenteService.recusar(this.cliente).subscribe(cliente => {
        this.loading = false;
        this.router.navigate(['/gerente/home']);
        
      }
    );
    
    this.activeModal.close();
    }
    this.loading = false;
    
    

  }

  





}

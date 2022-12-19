import { Component, Input, OnInit } from '@angular/core';
import { DepositarService } from '../services/depositar.service';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {
  @Input()
  transferencias: any[] = [];
  depositos: any[] = [];

  constructor(
    private transferenciaService: TransferenciaService,
    private depositarService: DepositarService
    ) {}

  ngOnInit(): void {
    this.transferenciaService.todas().subscribe((x) => (this.transferencias = x));
    this.depositarService.todas().subscribe((x) => (this.depositos = x));
  }
}

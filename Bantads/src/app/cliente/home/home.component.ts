import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared';
import { ClienteService } from '../services/cliente.service';
import { RouterLink, Router, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  cliente: Cliente = new Cliente();
  loading!: boolean;
  id!: string;
  constructor(
    private router: Router,
    private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
    this.loading = false;
    this.clienteService.buscarPorId(+this.id).subscribe(cliente => { this.cliente = cliente; });
  }

}

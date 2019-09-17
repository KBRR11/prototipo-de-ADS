import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from 'src/app/Service/service.service';
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
clientes:Object[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getCliente().subscribe(data=>{this.clientes = data})
  }

}

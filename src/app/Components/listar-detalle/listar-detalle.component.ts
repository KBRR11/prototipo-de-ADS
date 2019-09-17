import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from 'src/app/Service/service.service';
@Component({
  selector: 'app-listar-detalle',
  templateUrl: './listar-detalle.component.html',
  styleUrls: ['./listar-detalle.component.css']
})
export class ListarDetalleComponent implements OnInit {
detalles:Object[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getDetalle().subscribe(data=>{this.detalles = data})
  }

}

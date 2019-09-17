import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
empleados:Object[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getEmpleado().subscribe(data=>{this.empleados = data})
  }

}

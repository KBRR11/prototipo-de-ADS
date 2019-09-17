import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from 'src/app/Service/service.service';
import { Empleado } from "src/app/Modelos/Empleado";

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {
emp:Empleado=new Empleado();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  }

  addEmpleado(){
    var e_nombres= (<HTMLInputElement>document.getElementById("e_nombres")).value;
  var e_apellidos= (<HTMLInputElement>document.getElementById("e_apellidos")).value;
  this.service.postEmpleado(this.emp).subscribe(data=>{
    alert(e_nombres+" "+e_apellidos+" Agregado correctamente!");
  })
  this.borrardata();
  }

  public borrardata(){
    (<HTMLInputElement>document.getElementById("e_nombres")).value=" ";
    (<HTMLInputElement>document.getElementById("e_apellidos")).value=" ";
    (<HTMLInputElement>document.getElementById("e_dni")).value=" ";
    (<HTMLInputElement>document.getElementById("correo")).value=" ";
    (<HTMLInputElement>document.getElementById("clave")).value=" ";
  }
}

import { Component, OnInit  } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from 'src/app/Service/service.service';
import { Libro } from 'src/app/Modelos/Libro';
import { Autor } from 'src/app/Modelos/Autor';


@Component({
  selector: 'app-add-libro',
  templateUrl: './add-libro.component.html',
  styleUrls: ['./add-libro.component.css'],
})





export class AddLibroComponent implements OnInit {
  autores:Object[];
  lib:Libro=new Libro();
  aut:Autor=new Autor();
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getAutor().subscribe(data=>{this.autores = data})
    
  }

/**
 * obtenerDatos
 */
obtenerDatos() {
  var titulo= (<HTMLInputElement>document.getElementById("titulo")).value;
  this.service.postLibro(this.lib).subscribe(data=>{
    alert(titulo+" Agregado correctamente!");
  })
  this.borrarDatos();
}

addAutor(){
  var a_nombres= (<HTMLInputElement>document.getElementById("a_nombres")).value;
  var a_apellidos= (<HTMLInputElement>document.getElementById("a_apellidos")).value;
  this.service.postAutor(this.aut).subscribe(data=>{
    alert(a_nombres+" "+a_apellidos+" Agregado correctamente!");
  })
  this.borrardata();
}
public borrardata(){
  (<HTMLInputElement>document.getElementById("a_nombres")).value=" ";
  (<HTMLInputElement>document.getElementById("a_apellidos")).value=" ";
}

public borrarDatos(){
  (<HTMLInputElement>document.getElementById("titulo")).value=" ";
  (<HTMLInputElement>document.getElementById("edicion")).value=" ";
  (<HTMLInputElement>document.getElementById("anio")).value=" ";
  (<HTMLInputElement>document.getElementById("autor")).value="0";
  

}
/**
 * editar
 */

  


}



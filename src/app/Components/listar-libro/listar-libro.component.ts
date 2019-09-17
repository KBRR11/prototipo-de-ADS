import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from 'src/app/Service/service.service';
import { Libro } from "src/app/Modelos/Libro";



@Component({
  selector: 'app-listar-libro',
  templateUrl: './listar-libro.component.html',
  styleUrls: ['./listar-libro.component.css']
})


export class ListarLibroComponent implements OnInit {
  display='none';
  autores:Object[];
libros:Libro[];
constructor(private service:ServiceService, private router:Router) { }
lib:Libro=new Libro();
id:number;
  ngOnInit() {
    this.service.getLibro().subscribe(data=>{this.libros = data}),
    this.service.getAutor().subscribe(data=>{this.autores = data})
  }
  
  editar(libro:Libro):void{
    (<HTMLInputElement>document.getElementById("titulito")).value=""+libro.titulo;
    (<HTMLInputElement>document.getElementById("edicionsita")).value=""+libro.edicion;
    (<HTMLInputElement>document.getElementById("anito")).value=""+libro.anio;
    (<HTMLInputElement>document.getElementById("autorcito")).value=""+libro.idautor;
    alert(libro.titulo+" "+libro.idlibro);
    this.id=libro.idlibro;
    }

  

  Actualizar(libro:Libro){
    alert(libro.titulo)
    this.service.updateLibro(this.id,libro).subscribe(data=>{
      this.lib=data;
     
      this.router.navigate(["listarLibro"]);
  })
}

Eliminar(libro:Libro){
  this.service.deleteLibro(libro).subscribe(data=>{
    alert("Registro eliminado exitosamente!");
    this.libros=this.libros.filter(e=>e!==libro)
  })
}

}

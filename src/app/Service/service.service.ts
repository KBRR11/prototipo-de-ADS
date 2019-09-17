import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Libro } from "../Modelos/Libro";
import { Autor } from "../Modelos/Autor";
import { Empleado } from "../Modelos/Empleado";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url = 'http://localhost:8081/libros/'
  Url2= 'http://localhost:8081/autores/'
  Url3= 'http://localhost:8081/clientes/'
  Url4= 'http://localhost:8081/empleados/'
  Url5= 'http://localhost:8081/detalles/'
  
  getLibro(){
    return this.http.get<Libro[]>(this.Url)
  }
  
  postLibro(libro:Libro){
    return this.http.post<Libro>(this.Url+"add",libro);
  }

  

  updateLibro(id:number,libro:Libro){
    
    return this.http.put<Libro>(this.Url+id,libro);
  }


  deleteLibro(libro:Libro){
    return this.http.delete<Libro>(this.Url+libro.idlibro);
  }

  getAutor(){
    return this.http.get<Object[]>(this.Url2)
  }

  postAutor(autor:Autor){
    return this.http.post<Autor>(this.Url2+"add",autor);
  }

  getCliente(){
    return this.http.get<Object[]>(this.Url3)
  }

  postEmpleado(empleado:Empleado){
    return this.http.post<Empleado>(this.Url4+"add",empleado);
  }

  getEmpleado(){
    return this.http.get<Object[]>(this.Url4)
  }
  getDetalle(){
    return this.http.get<Object[]>(this.Url5)
  }
}

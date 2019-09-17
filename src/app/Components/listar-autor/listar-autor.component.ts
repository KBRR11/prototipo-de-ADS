import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-autor',
  templateUrl: './listar-autor.component.html',
  styleUrls: ['./listar-autor.component.css']
})
export class ListarAutorComponent implements OnInit {
autores:Object[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
    this.service.getAutor().subscribe(data=>{this.autores = data})
  }

}

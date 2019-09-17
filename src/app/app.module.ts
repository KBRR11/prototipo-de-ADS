import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabezaComponent } from './Components/cabeza/cabeza.component';
import { LeftComponent } from './Components/left/left.component';
import { ServiceService } from "../app/Service/service.service";
import { FooterComponent } from './Components/footer/footer.component';
import { ListarLibroComponent } from './Components/listar-libro/listar-libro.component';
import { ListarAutorComponent } from './Components/listar-autor/listar-autor.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { ListarClienteComponent } from './Components/listar-cliente/listar-cliente.component';
import { ListarEmpleadoComponent } from './Components/listar-empleado/listar-empleado.component';
import { ListarDetalleComponent } from './Components/listar-detalle/listar-detalle.component';
import { AddLibroComponent } from './Components/add-libro/add-libro.component';
import { AddEmpleadoComponent } from './Components/add-empleado/add-empleado.component';
import { AddPrestamoComponent } from './Components/add-prestamo/add-prestamo.component';
@NgModule({
  declarations: [
    AppComponent,
    CabezaComponent,
    LeftComponent,
    FooterComponent,
    ListarLibroComponent,
    ListarAutorComponent,
    ListarClienteComponent,
    ListarEmpleadoComponent,
    ListarDetalleComponent,
    AddLibroComponent,
    AddEmpleadoComponent,
    AddPrestamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

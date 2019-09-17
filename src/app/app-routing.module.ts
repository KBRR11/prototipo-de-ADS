import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarLibroComponent } from "./Components/listar-libro/listar-libro.component";
import { ListarAutorComponent } from "./Components/listar-autor/listar-autor.component";
import { ListarClienteComponent } from "./Components/listar-cliente/listar-cliente.component";
import { ListarEmpleadoComponent } from "./Components/listar-empleado/listar-empleado.component";
import { ListarDetalleComponent } from "./Components/listar-detalle/listar-detalle.component";
import { AddLibroComponent } from "./Components/add-libro/add-libro.component";
import { AddEmpleadoComponent } from "./Components/add-empleado/add-empleado.component";
import { AddPrestamoComponent } from "./Components/add-prestamo/add-prestamo.component";

const routes: Routes = [
  {path:"listarLibro", component:ListarLibroComponent},
  {path:"listarAutor", component:ListarAutorComponent},
  {path:"listarCliente", component:ListarClienteComponent},
  {path:"listarEmpleado", component:ListarEmpleadoComponent},
  {path:"listarDetalle", component:ListarDetalleComponent},
  {path:"addLibro", component:AddLibroComponent},
  {path:"addEmpleado", component:AddEmpleadoComponent},
  {path:"addPrestamo", component:AddPrestamoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

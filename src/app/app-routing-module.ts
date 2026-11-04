import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ComicSimpleComponent } from './components/comic-simple-component/comic-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';
import { BuscarClienteComponent } from './components/buscar-cliente-component/buscar-cliente-component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "comic", component: ComicSimpleComponent},
  {path: "comicsjson", component: ComicsJsonComponent},
  {path: "jugador", component: JugadoresComponent},
  {path: "buscarcliente", component: BuscarClienteComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

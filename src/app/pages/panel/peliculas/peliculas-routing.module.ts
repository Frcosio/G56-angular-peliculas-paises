import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPeliculaComponent } from './lista-pelicula/lista-pelicula.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPeliculaComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }

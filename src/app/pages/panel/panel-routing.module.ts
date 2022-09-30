import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './panel.component';
import { ListaPaisesComponent } from './paises/lista-paises/lista-paises.component';
import { ListaPeliculaComponent } from './peliculas/lista-pelicula/lista-pelicula.component';

const routes: Routes = [
  {
    path:'',
    component: PanelComponent,
    children:[
      {
        path:'list-countries',
        loadChildren: () => import('./paises/paises.module').then((m) => m.PaisesModule),
      },
      {
        path:'list-movies',
        loadChildren: () => import('./peliculas/peliculas.module').then((m) => m.PeliculasModule),
      },
      {
        path:'',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
    ]
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }

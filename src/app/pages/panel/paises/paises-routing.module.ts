import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPaisesComponent
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
export class PaisesRoutingModule { }

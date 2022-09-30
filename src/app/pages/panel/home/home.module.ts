import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormPaisesComponent } from './form-paises/form-paises.component';
import { FormMoviesComponent } from './form-movies/form-movies.component';
import { ListHomeComponent } from './list-home/list-home.component';
import { ComponentModule } from '../../../core/shared/component/component.module';
import { PaisesModule } from '../paises/paises.module';
import { PeliculasModule } from '../peliculas/peliculas.module';


@NgModule({
  declarations: [
    FormPaisesComponent,
    FormMoviesComponent,
    ListHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentModule,
    PaisesModule,
    PeliculasModule
  ],
  exports: [
    ListHomeComponent,
  ],

})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { FormularioPeliculaComponent } from './formulario-pelicula/formulario-pelicula.component';
import { ListaPeliculaComponent } from './lista-pelicula/lista-pelicula.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

import { NzCardModule } from 'ng-zorro-antd/card';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { NzListModule } from 'ng-zorro-antd/list';

import { ComponentModule } from 'src/app/core/shared/component/component.module';


@NgModule({
  declarations: [
    FormularioPeliculaComponent,
    ListaPeliculaComponent,
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzCardModule,
    NzGridModule,
    NzListModule,
    ComponentModule,

  ],
  exports: [
    FormularioPeliculaComponent,
  ],

})
export class PeliculasModule { }

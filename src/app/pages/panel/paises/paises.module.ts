import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { FormularioPaisesComponent } from '../paises/formulario-paises/formulario-paises.component';
import { ListaPaisesComponent } from './lista-paises/lista-paises.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzListModule } from 'ng-zorro-antd/list';


@NgModule({
  declarations: [
    FormularioPaisesComponent,
    ListaPaisesComponent,
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzCardModule,
    NzListModule,
    NzGridModule,
  ],
  exports: [
    FormularioPaisesComponent
  ],

})
export class PaisesModule { }

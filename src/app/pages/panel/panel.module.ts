import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { ComponentModule } from '../../core/shared/component/component.module';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { PaisesModule } from './paises/paises.module';
import { PeliculasModule } from './peliculas/peliculas.module';
import { HomeModule } from './home/home.module';




@NgModule({
  declarations: [
    PanelComponent,
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    NzLayoutModule,
    ComponentModule,
    NzBreadCrumbModule,
    NzMenuModule,
    PeliculasModule,
    PaisesModule,
    HomeModule
  ]

})
export class PanelModule { }

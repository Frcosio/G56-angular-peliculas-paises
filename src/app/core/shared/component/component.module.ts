import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { CardPeliculaComponent } from './card-pelicula/card-pelicula.component';

import { NzCardModule } from 'ng-zorro-antd/card';

import { NzGridModule } from 'ng-zorro-antd/grid';

import { NzListModule } from 'ng-zorro-antd/list';



@NgModule({
  declarations: [
    FooterComponent,
    CardPeliculaComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzGridModule,
    NzListModule,

  ],
  exports: [
    FooterComponent,
    CardPeliculaComponent
  ],
})
export class ComponentModule { }

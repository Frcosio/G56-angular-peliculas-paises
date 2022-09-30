import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.scss']
})
export class CardPeliculaComponent implements OnInit {
  @Input() titulo: string ='';
  @Input() descripcion: string ='';
  @Input() imagen: string ='';
  constructor() { }

  ngOnInit(): void {

    this.imagen = `https://image.tmdb.org/t/p/w440_and_h660_face/${this.imagen}`;

  }

  imageError(event: Event) {
    (event.target as HTMLInputElement).src = 'assets/images/default.jpg';
  }

}

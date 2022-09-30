import { Component, OnInit } from '@angular/core';
import { IPelicula, IPeliculas } from '../interfaces/peliculas';
import { PeliculasService } from '../service/peliculas.service';


@Component({
  selector: 'app-lista-pelicula',
  templateUrl: './lista-pelicula.component.html',
  styleUrls: ['./lista-pelicula.component.scss']
})
export class ListaPeliculaComponent implements OnInit {

  listaPeliculas: IPelicula[] = [];
  constructor(private peliculasServ: PeliculasService) { }

  ngOnInit(): void {
    this.loadLista();
  }

  private loadLista(){
    this.peliculasServ.listar().subscribe(
      (lista: IPeliculas)=>{
        console.log('inicio');
        console.log(lista);
        this.listaPeliculas = lista.results;
        console.log(this.listaPeliculas);
        console.log('fin');
      }
    )
  }

  btnOrdenarDesc(){
    var ordenado =this.listaPeliculas.sort((a, b) => b.vote_count - a.vote_count);
    ordenado.forEach((e) => {
    this.listaPeliculas=ordenado;
});
}

btnOrdenarAsc(){
  var ordenado =this.listaPeliculas.sort((b, a) => b.vote_count - a.vote_count);
  ordenado.forEach((e) => {
  this.listaPeliculas=ordenado;
});
}

}

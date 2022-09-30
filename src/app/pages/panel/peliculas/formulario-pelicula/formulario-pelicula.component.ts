import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPelicula, IPeliculas } from '../interfaces/peliculas';
import { PeliculasService } from '../service/peliculas.service';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.scss']
})
export class FormularioPeliculaComponent implements OnInit {
  listaPeliculas: IPelicula[] = [];
  listaPeliculasFiltro: IPelicula[] = [];
  constructor(private peliculasServ: PeliculasService,
    private router: Router) { }

  ngOnInit(): void {
    this.loadLista();
  }

  private loadLista(){
    this.peliculasServ.listar().subscribe(
      (lista: IPeliculas)=>{
        this.listaPeliculas = lista.results;

        lista.results.forEach((valor, posicion, array) => {
          if (posicion<=3) {
            this.listaPeliculasFiltro.push(valor);
          }
        });


      }
    )
  }

  ListarPeliculas(){
    this.router.navigate(['list-movies']);
    }

}

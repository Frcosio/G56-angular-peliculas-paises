import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPeliculas } from '../interfaces/peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  listar():Observable<IPeliculas>{
    const uri = `https://api.themoviedb.org/3/movie/top_rated?api_key=037ec0f2278d48315d2d16612822c1aa`;
    return this.http.get<IPeliculas>( uri );
   }

}

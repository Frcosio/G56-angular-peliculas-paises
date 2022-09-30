import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPaises } from '../interfaces/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http: HttpClient) { }

  listar():Observable<IPaises[]>{
    const uri = `https://restcountries.com/v3.1/lang/spa`;
    return this.http.get<IPaises[]>( uri );
   }

}

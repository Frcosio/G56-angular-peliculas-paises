import { Component, OnInit } from '@angular/core';
import { IPaises } from '../interfaces/paises';
import { PaisesService } from '../service/paises.service';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.scss']
})
export class ListaPaisesComponent implements OnInit {
  listaPaises: IPaises[] = [];
  constructor(private paisesServ: PaisesService) { }

  ngOnInit(): void {
    this.loadLista();
  }

  private loadLista(){
    this.paisesServ.listar().subscribe(
      (lista: IPaises[])=>{
        console.log(lista);
        this.listaPaises = lista;
      }
    )
  }

}

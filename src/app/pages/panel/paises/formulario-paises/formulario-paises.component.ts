import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoatOfArms, IPaises, Name } from '../interfaces/paises';
import { PaisesService } from '../service/paises.service';

@Component({
  selector: 'app-formulario-paises',
  templateUrl: './formulario-paises.component.html',
  styleUrls: ['./formulario-paises.component.scss']
})
export class FormularioPaisesComponent implements OnInit {
  listaPaises: IPaises[] = [];
  listaPaisesFiltro: IPaises[] = [];
  constructor(private paisesServ: PaisesService,private router: Router) { }

  ngOnInit(): void {
    this.loadLista();
  }



  private loadLista(){
    this.paisesServ.listar().subscribe(
      (lista: IPaises[])=>{
        this.listaPaises = lista;

        lista.forEach((valor, posicion, array) => {
          if (posicion<=2) {
            this.listaPaisesFiltro.push(valor);
          }
        });

        if (this.listaPaisesFiltro.length>0){
          //Adicionar ultimo Registro Ver Todos
            try {
             var strCant= String(this.listaPaises.length-4);
              var flag1: Name={common: strCant, official: ''};
              var flag2: CoatOfArms={png: 'assets/images/default.jpg', svg:''}
              var strTodos="";
                let p1: IPaises = { name: flag1, cca3: strTodos , flags: flag2};
                //console.log(p1);
               this.listaPaisesFiltro.push(p1);
            } catch (error) {
              console.log('xxx ', error);
            }
          }


      }

    )
  }

  ListarPaises(){
    this.router.navigate(['list-countries']);
    }

    imageError(event: Event) {
      (event.target as HTMLInputElement).src = '/assets/images/default.jpg';
    }

}

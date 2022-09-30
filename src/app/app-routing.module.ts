import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelComponent } from './pages/panel/panel.component';
import { PanelModule } from './pages/panel/panel.module';

const routes: Routes = [
/*   {
    path:'',
    component: PanelComponent,
  }, */
  {
    path:'',
   loadChildren: () =>
   import('./pages/panel/panel.module').then((m) => m.PanelModule),
  },
  {
    path:'**',
    redirectTo: 'home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

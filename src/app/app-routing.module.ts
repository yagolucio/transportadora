import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransportesComponent } from './transportes/transportes.component'
import { TransportesAddComponent } from './transportes-add/transportes-add.component'
import { TransportesEditComponent } from './transportes-edit/transportes-edit.component'

const routes: Routes = [
  {
    path: '',
    component: TransportesComponent,
  },
  {
    path: 'transport-add',
    component: TransportesAddComponent,
  },
  {
    path: 'transport-edit/:id',
    component: TransportesEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

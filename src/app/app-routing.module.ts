import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesDetailsComponent } from './vehicles/vehicles-details/vehicles-details.component';
import { VehiclesNewComponent } from './vehicles/vehicles-new/vehicles-new.component';
import { VehiclesEditComponent } from './vehicles/vehicles-edit/vehicles-edit.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';


const routes: Routes = [
  { 
    path: 'vehicles', 
    component: VehiclesComponent
  },
  { 
      path: 'vehicles/details/:id', 
      component: VehiclesDetailsComponent
  },
  { 
      path: 'vehicles/new', 
      component: VehiclesNewComponent
  },
  { 
      path: 'vehicles/edit/:id', 
      component: VehiclesEditComponent
  },
  { 
      path: '',
      redirectTo: '/vehicles',
      pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

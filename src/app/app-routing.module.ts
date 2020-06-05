import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { VehiclesNewComponent } from './vehicles-new/vehicles-new.component';
import { VehiclesEditComponent } from './vehicles-edit/vehicles-edit.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

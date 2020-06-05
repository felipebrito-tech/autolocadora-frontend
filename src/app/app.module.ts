import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { VehiclesNewComponent } from './vehicles-new/vehicles-new.component';
import { VehiclesEditComponent } from './vehicles-edit/vehicles-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    VehiclesDetailsComponent,
    VehiclesNewComponent,
    VehiclesEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

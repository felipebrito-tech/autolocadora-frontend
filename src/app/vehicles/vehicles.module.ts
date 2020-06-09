import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

import { VehiclesComponent } from './vehicles.component';
import { VehiclesDetailsComponent } from './vehicles-details/vehicles-details.component';
import { VehiclesEditComponent } from './vehicles-edit/vehicles-edit.component';
import { VehiclesNewComponent } from './vehicles-new/vehicles-new.component';

@NgModule ({
    declarations: [
        VehiclesComponent,
        VehiclesDetailsComponent,
        VehiclesEditComponent,
        VehiclesNewComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatCardModule
    ]
})
export class VehiclesModule {}
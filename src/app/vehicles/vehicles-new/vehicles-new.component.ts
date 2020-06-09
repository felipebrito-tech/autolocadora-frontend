import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

import { VehicleService } from '../vehicle.service';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'al-vehicles-new',
  templateUrl: './vehicles-new.component.html',
  styleUrls: ['./vehicles-new.component.css']
})
export class VehiclesNewComponent implements OnInit {

  vehicleForm: FormGroup;

  constructor(
              private router: Router,
              private formBuilder: FormBuilder,
              private vehicleService: VehicleService
              ) {}

  ngOnInit(): void {
    this.vehicleForm = this.formBuilder.group({
      'placa' : [null, [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
      'chassi' : [null, [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
      'renavam' : [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      'modelo' : [null, Validators.required],
      'marca' : [null, Validators.required],
      'ano' : [null, Validators.required]
    });
  }

  add(ngForm: NgForm) {
    let vehicle: Vehicle = Vehicle.create(ngForm);

    this.vehicleService.add(vehicle)
          .subscribe(vehicle => this.router.navigate(['/vehicles/details/', vehicle.id]));
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'al-vehicles-edit',
  templateUrl: './vehicles-edit.component.html',
  styleUrls: ['./vehicles-edit.component.css']
})
export class VehiclesEditComponent implements OnInit {

  vehicleId: number = null;
  vehicleForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.vehicleId = this.route.snapshot.params['id'];

    this.get(Vehicle.createById(this.vehicleId));

    this.vehicleForm = this.formBuilder.group({
      'placa' : [null, [Validators.required, Validators.minLength(7), Validators.maxLength(7)]],
      'chassi' : [null, [Validators.required, Validators.minLength(17), Validators.maxLength(17)]],
      'renavam' : [null, [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      'modelo' : [null, Validators.required],
      'marca' : [null, Validators.required],
      'ano' : [null, Validators.required]
    });
  }

  get(vehicle: Vehicle) {
    this.vehicleService.show(vehicle)
      .subscribe(vehicle => {
        this.vehicleForm.setValue({
          'placa': vehicle.placa,
          'chassi': vehicle.chassi,
          'renavam': vehicle.renavam,
          'modelo': vehicle.modelo,
          'marca': vehicle.marca,
          'ano': vehicle.ano
        });
        console.log(this.vehicleForm);
      });
  }

  update(ngForm: NgForm) {
    let vehicle: Vehicle = Vehicle.create(ngForm);
    vehicle.id = this.vehicleId;

    this.vehicleService.update(vehicle)
          .subscribe(res => this.router.navigate(['/vehicles/details/', this.vehicleId]));
  }

}

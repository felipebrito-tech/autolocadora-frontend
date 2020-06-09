import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Vehicle } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'al-vehicles-details',
  templateUrl: './vehicles-details.component.html',
  styleUrls: ['./vehicles-details.component.css']
})
export class VehiclesDetailsComponent implements OnInit {

  vehicle: Vehicle = new Vehicle();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private vehicleService: VehicleService
  ) {}

  ngOnInit(): void {
    let vehicle: Vehicle = new Vehicle();
    vehicle.id = this.route.snapshot.params['id'];

    this.getVehicle(vehicle);
  }

  getVehicle(vehicle: Vehicle) {
    this.vehicleService.show(vehicle)
      .subscribe(result => this.vehicle = result);
  }

  deleteVehicle(vehicle: Vehicle) {
    this.vehicleService.delete(vehicle)
      .subscribe(res => this.router.navigate(['/vehicles']));
  }

}

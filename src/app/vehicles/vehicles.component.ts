import { Component, OnInit } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle';

@Component({
  selector: 'al-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  vehicles: Vehicle[] = [];
  displayedColumns: string[] = ['marca', 'modelo', 'ano', 'acao'];

  constructor(private vehicleService: VehicleService) {}
  
  ngOnInit(): void {
    this.vehicleService.listAll()
      .subscribe(result => this.vehicles = result);
  }

}

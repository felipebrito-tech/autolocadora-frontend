import { NgForm } from '@angular/forms';

export class Vehicle {
    id:number;
    placa:string;
    chassi:string;
    renavam:string;
    modelo:string;
    marca:string;
    ano:number;

    static createById(id: number): Vehicle {
        let vehicle: Vehicle = new Vehicle();
        vehicle.id = id;

        return vehicle;
    }

    static create(ngForm: NgForm): Vehicle {
        let vehicle: Vehicle = new Vehicle();

        vehicle.placa = ngForm['placa'];
        vehicle.chassi = ngForm['chassi'];
        vehicle.renavam = ngForm['renavam'];
        vehicle.modelo = ngForm['modelo'];
        vehicle.marca = ngForm['marca'];
        vehicle.ano = ngForm['ano'];

        return vehicle;
    }
}
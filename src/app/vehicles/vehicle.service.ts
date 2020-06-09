import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Vehicle } from './vehicle';
import { Observable } from 'rxjs';

const httpOptions ={
    headers: new HttpHeaders({'content-type': 'application/json'})
};
const API = 'http://localhost:3000/api/vehicles';

@Injectable({providedIn: 'root'})
export class VehicleService {

    constructor(private http: HttpClient) {}

    listAll(): Observable<Vehicle[]> {
        return this.http
                .get<Vehicle[]>(API);
    }

    show(vehicle: Vehicle): Observable<Vehicle> {
        const detailsURL = `${API}/${vehicle.id}`;

        return this.http
                .get<Vehicle>(detailsURL);
    }

    add(vehicle: Vehicle): Observable<Vehicle> {
        return this.http
                .post<Vehicle>(API, vehicle, httpOptions);
    }

    update(vehicle: Vehicle): Observable<Vehicle> {
        const updateURL = `${API}/${vehicle.id}`;

        return this.http
                .put<Vehicle>(updateURL, vehicle, httpOptions);
    }

    delete(vehicle: Vehicle): Observable<Vehicle> {
        const deleteURL = `${API}/${vehicle.id}`;

        return this.http
                .delete<Vehicle>(deleteURL, httpOptions);
    }
}
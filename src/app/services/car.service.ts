import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/Car';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private carsUrl = 'assets/mock_cars.json';

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }
}

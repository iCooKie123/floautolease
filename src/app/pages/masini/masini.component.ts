import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/assets/models/Car';
@Component({
  selector: 'app-masini',
  templateUrl: './masini.component.html',
  styleUrls: ['./masini.component.scss'],
})
export class MasiniComponent implements OnInit {
  constructor(private CarService: CarService) {}
  cars: Car[] = [];
  ngOnInit(): void {
    this.CarService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
    console.log(this.cars);
  }
}

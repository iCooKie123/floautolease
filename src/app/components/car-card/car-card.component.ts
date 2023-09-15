import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Car } from 'src/assets/models/Car';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss'],
})
export class CarCardComponent {
  @Input() car: Car = {} as Car;

  constructor() {}

  
}

import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/models/Car';

interface SortOption {
  value: keyof Car;
  label: string;
  direction: 'asc' | 'desc';
}

interface FilterOption {
  value: keyof Car;
  label: string;
  filterValue: string | number;
}
// TODO: add filters
// TOOD: add pagination
// TODO: add search
// TODO: add sort by
// TODO: make filters tab smaller when not in use and full width when in use
@Component({
  selector: 'app-masini',
  templateUrl: './masini.component.html',
  styleUrls: ['./masini.component.scss'],
})
export class MasiniComponent implements OnInit {
  constructor(private carService: CarService) {}

  cars: Car[] = [];
  sortOptions: SortOption[] = [
    { value: 'pret', label: 'Pret - Ascending', direction: 'asc' },
    { value: 'pret', label: 'Pret - Descending', direction: 'desc' },
    {
      value: 'anFabricatie',
      label: 'An fabricatie - Ascending',
      direction: 'asc',
    },
    {
      value: 'anFabricatie',
      label: 'An fabricatie - Descending',
      direction: 'desc',
    },
    { value: 'putere', label: 'Putere - Ascending', direction: 'asc' },
    { value: 'putere', label: 'Putere - Descending', direction: 'desc' },
    {
      value: 'dataAdaugare',
      label: 'Data adaugare - Ascending',
      direction: 'asc',
    },
    {
      value: 'dataAdaugare',
      label: 'Data adaugare - Descending',
      direction: 'desc',
    },
  ];
  selectedSortOption: SortOption = this.sortOptions[0];
  filterOptions: FilterOption[] = [
    { value: 'marca', label: 'Marca', filterValue: '' },
    { value: 'model', label: 'Model', filterValue: '' },
    { value: 'anFabricatie', label: 'An fabricatie', filterValue: '' },
    { value: 'putere', label: 'Putere', filterValue: '' },
  ];
  selectedFilterOption: FilterOption = this.filterOptions[0];
  filterPanelOpenState: boolean = false;
  sortPanelOpenState: boolean = false;
  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => {
      this.cars = cars;
    });
  }

  sortCarsBy(option: SortOption): void {
    const { value, direction } = option;
    if (!Object.keys(this.cars[0]).includes(value)) {
      console.error(`Invalid property: ${value}`);
      return;
    }
    this.cars.sort((a, b) => {
      const valueA = a[value];
      const valueB = b[value];
      let comparison = 0;
      if (valueA! > valueB!) {
        comparison = 1;
      } else if (valueA! < valueB!) {
        comparison = -1;
      }
      return direction === 'desc' ? comparison * -1 : comparison;
    });
  }

  filterCarsBy(option: FilterOption): void {
    const { value, filterValue } = option;
    if (!Object.keys(this.cars[0]).includes(value)) {
      console.error(`Invalid property: ${value}`);
      return;
    }
    this.cars = this.cars.filter((car) => {
      const carValue = car[value];
      if (typeof carValue === 'string') {
        return carValue
          .toLowerCase()
          .includes(filterValue.toString().toLowerCase());
      } else {
        return carValue === filterValue;
      }
    });
  }
}

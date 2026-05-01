import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Car } from '../../model/car';
import { CarService } from '../../service/car-service';

@Component({
  selector: 'app-injectable-service',
  imports: [RouterLink],
  templateUrl: './injectable-service.html',
  styleUrl: './injectable-service.css',
})
export class InjectableService {
  cars = signal<Car[]>([]);
  service = inject(CarService);

  constructor() {
    this.service.getCars().then((cars: Car[]) => {
      this.cars.set(cars);
    });
  }
}

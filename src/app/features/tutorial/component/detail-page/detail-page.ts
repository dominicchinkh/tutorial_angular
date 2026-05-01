import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../model/car';
import { CarService } from '../../service/car-service';

@Component({
  selector: 'app-detail-page',
  imports: [],
  templateUrl: './detail-page.html',
  styleUrl: './detail-page.css',
})
export class DetailPage {
  route = inject(ActivatedRoute);
  service = inject(CarService);

  car = signal<Car | undefined>(undefined);
  
  constructor() {
    this.service.getCar(Number(this.route.snapshot.params['id'])).then((car: Car) => {
      this.car.set(car);
    })
  }
}

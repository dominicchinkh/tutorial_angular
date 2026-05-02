import { Component, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartDisplay } from '../../component/cart-display/cart-display';
import { Car } from '../../model/car';
import { CarService } from '../../service/car-service';
import { CartStore } from '../../service/cart-store';

@Component({
  selector: 'app-injectable-service',
  imports: [CartDisplay, RouterLink],
  templateUrl: './injectable-service.html',
  styleUrl: './injectable-service.css',
})
export class InjectableService {
  cars = signal<Car[]>([]);
  service = inject(CarService);
  store = inject(CartStore);

  cart = viewChild(CartDisplay);

  constructor() {
    this.service.getCars().then((cars: Car[]) => {
      this.cars.set(cars);
    });
  }

  processCheckout() {
    const cart = this.cart();
    if (cart) {
      // Call methods on a child component directly
      cart.processCheckout();
    }
  }
}

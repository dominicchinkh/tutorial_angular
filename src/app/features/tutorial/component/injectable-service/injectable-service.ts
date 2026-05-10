import { Component, ElementRef, computed, inject, input, signal, viewChild, viewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartDisplay } from '../../component/cart-display/cart-display';
import { Car } from '../../model/car';
import { CarService } from '../../service/car-service';
import { CartStore } from '../../service/cart-store';

@Component({
  selector: 'app-car-detail',
  template: `
    <li> ⭐️ <a [routerLink]="['/cars', id()]">{{ name() }}</a></li>
  `,
  imports: [RouterLink]
})
export class CarDetail {
  id = input.required<string>();
  name = input.required<string>();
}

@Component({
  selector: 'app-injectable-service',
  imports: [CartDisplay, CarDetail],
  templateUrl: './injectable-service.html',
  styleUrl: './injectable-service.css',
})
export class InjectableService {
  cars = signal<Car[]>([]);
  service = inject(CarService);
  store = inject(CartStore);

  /*-----------
   * viewChild
   *
   * View queries retrieve results from the elements in the component's view — the elements defined 
   * in the component's own template
   * 
   */
  cart1 = viewChild(CartDisplay);
  isCartProcessingCheckout = computed(() => this.cart1()?.isProcessingCheckout);

  // In some cases, especially with viewChild, you know with certainty that a specific child is always 
  // available. In other cases, you may want to strictly enforce that a specific child is present. For 
  // these cases, you can use a required query.
  cart2 = viewChild.required(CartDisplay);

  /*--------------
   * viewChildren
   *
   * You can also query for multiple results with the viewChildren function
   *
   */
  carsDetail = viewChildren(CarDetail);
  carsId = computed(() => { 
    this.carsDetail().map((detail) => { 
      detail.id; 
    }) 
  });

  /*---------------
   * Query locator
   *
   * You can alternatively specify a string locator corresponding to a template reference variable.
   * 
   * If more than one element defines the same template reference variable, the query retrieves the 
   * first matching element.
   * 
   */
  processButton = viewChild<ElementRef<HTMLButtonElement>>('process');

  constructor() {
    this.service.getCars().then((cars: Car[]) => {
      this.cars.set(cars);
    });
  }

  processCheckout() {
    const cart = this.cart1();
    if (cart) {
      // Call methods on a child component directly
      cart.processCheckout();
    }
  }
}

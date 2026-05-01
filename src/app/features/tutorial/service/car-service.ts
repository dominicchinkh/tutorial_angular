import { Injectable } from '@angular/core';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = [
    { id: 0, name: 'Sunflower GT', isElectricVehicle: false },
    { id: 1, name: 'Flexus Sport', isElectricVehicle: true }, 
    { id: 2, name: 'Sprout Mach One', isElectricVehicle: false }
  ];

  getCarNames(): string[] {
    return this.cars.map(car => car.name);
  }

  getCars(): Car[] {
    return this.cars;
  }

  getCar(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }
}

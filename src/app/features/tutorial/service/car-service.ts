import { Injectable } from '@angular/core';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  url = 'http://localhost:3000/cars';

  cars: Car[] = [
    { id: 0, name: 'Sunflower GT', isElectricVehicle: false },
    { id: 1, name: 'Flexus Sport', isElectricVehicle: true }, 
    { id: 2, name: 'Sprout Mach One', isElectricVehicle: false }
  ];

  // getCars(): Car[] {
  //   return this.cars;
  // }

  async getCars(): Promise<Car[]> {
    const data = await fetch(this.url);
    return await data.json()?? [];
  }

  // getCar(id: number): Car | undefined {
  //   return this.cars.find(car => car.id === id);
  // }

  async getCar(id: number): Promise<Car> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }
}

import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarService } from '../../service/car-service';

@Component({
  selector: 'app-injectable-service',
  imports: [RouterLink],
  templateUrl: './injectable-service.html',
  styleUrl: './injectable-service.css',
})
export class InjectableService {
  service = inject(CarService);

  cars = this.service.getCars();
}

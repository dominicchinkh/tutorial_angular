import {Component, inject} from '@angular/core';
import {CarService} from '../../service/car-service';

@Component({
  selector: 'app-injectable-service',
  imports: [],
  templateUrl: './injectable-service.html',
  styleUrl: './injectable-service.css',
})
export class InjectableService {
  service = inject(CarService);

  display = this.service.getCars().join(' ⭐️ ');
}

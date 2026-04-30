import {Component, inject} from '@angular/core';
import {CarService} from '../service/car-service';

@Component({
    selector: 'app-injectable-service',
    template: `
        <p>Car listing: {{ display }}</p>
    `
})
export class InjectableService {
    service = inject(CarService);

    display = this.service.getCars().join(' ⭐️ ');
}
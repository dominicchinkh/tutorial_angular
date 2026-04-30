import {Component} from '@angular/core';
import {CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe} from '@angular/common';
// import {CommonModule} from '@angular/common';
import {ReversePipe} from '../pipe/reverse-pipe';
import {StarPipe} from '../pipe/star-pipe';

@Component({
    selector: 'app-pipe',
    template: `
        <p> {{ username | lowercase }} </p>
        <p> Number with "decimal" {{ num | number: '3.2-2' }} </p>
        <p> Date with "date" {{ birthday | date: 'medium' }} </p>
        <p> Currency with "currency" {{ cost | currency: 'JPY' }} </p>
        <p> String with "star" {{ username | star }} </p>
        <p> String with "reverse" {{ username | reverse }} </p>
        <p> {{ pizza | json }} </p>
    `,
    imports: [CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, ReversePipe, StarPipe]
})
export class Pipe {
    username = 'DOMINIC';
    num = 103.1234;
    birthday = new Date(2023, 4, 5);
    cost = 1450.95;
    pizza = {
        toppings: ['pepperoni', 'bacon'],
        size: 'large'
    }
}

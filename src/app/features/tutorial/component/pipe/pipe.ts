import { Component } from '@angular/core';
import { ReversePipe } from '../../pipe/reverse-pipe';
import { StarPipe } from '../../pipe/star-pipe';
import { Pizza } from '../../model/pizza';

// Alternatively, import {CommonModule} from '@angular/common';
import {
  CurrencyPipe, 
  DatePipe, 
  DecimalPipe, 
  JsonPipe, 
  LowerCasePipe,
  TitleCasePipe
} from '@angular/common';

@Component({
  selector: 'app-pipe',
  imports: [
    CurrencyPipe, 
    DatePipe, 
    DecimalPipe, 
    JsonPipe, 
    LowerCasePipe, 
    ReversePipe, 
    StarPipe, 
    TitleCasePipe
  ],
  templateUrl: './pipe.html',
  styleUrl: './pipe.css',
})
export class Pipe {
    username = 'DOMINIC';
    num = 103.1234;
    birthday = new Date(2023, 4, 5);
    cost = 1450.95;
    pizza: Pizza = {
        toppings: ['pepperoni', 'bacon'],
        size: 'large'
    }
}

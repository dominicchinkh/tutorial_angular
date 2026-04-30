import {Component} from '@angular/core';
import {Input} from '../input/input';
import {Output} from '../output/output';

@Component({
  selector: 'app-input-output',
  imports: [Input, Output],
  templateUrl: './input-output.html',
  styleUrl: './input-output.css',
})
export class InputOutput {
  items = new Array();

  addItem(item: string) {
    this.items.push(item)
  }
}

import {Component, output} from '@angular/core';

@Component({
  selector: 'app-output',
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `
})
export class Output {
  addItemEvent = output<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
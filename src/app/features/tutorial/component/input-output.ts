import {Component} from '@angular/core';
import {Input} from './input';
import {Output} from './output';

@Component({
    selector: 'app-input-output',
    template: `
        <section>
          <app-input name="Dominic" />
        </section>

        <section>
          <p>🐢 All the way down: {{ items.length }}</p>
          <app-output (addItemEvent)="addItem($event)"/>
        </section>
    `,
    imports: [Input, Output]
})
export class InputOutput {
  items = new Array();

  addItem(item: string) {
    this.items.push(item)
  }
}
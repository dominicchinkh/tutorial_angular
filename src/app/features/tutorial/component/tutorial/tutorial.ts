import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.html',
  styleUrl: './tutorial.css',
  imports: []
})
export class Tutorial {
  city = 'San Francisco';

  items = new Array();

  addItem(item: string) {
    this.items.push(item)
  }
}

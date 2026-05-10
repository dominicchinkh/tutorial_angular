import {Component, output} from '@angular/core';

@Component({
  selector: 'app-output',
  imports: [],
  templateUrl: './output.html',
  styleUrl: './output.css',
})
export class Output {
  // Specify a different name for the event in a template (the default is `addItemEvent`)
  addItemEvent = output<string>({alias: 'itemsChanged'});

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

import { Component, input, model } from '@angular/core';

@Component({
  selector: 'app-model',
  imports: [],
  templateUrl: './model.html',
  styleUrl: './model.css',
})
export class Model {
  // Use model() for UI components that need to update their own value (form controls, toggles)
  checked = model.required<boolean>();

  // Use input() for data that only flows down (display data, configuration)
  label = input<string>();

  toggle() {
    this.checked.set(!this.checked());
  }
}

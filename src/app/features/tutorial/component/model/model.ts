import { Component, input, model } from '@angular/core';

// Model inputs do not support input transforms

@Component({
  selector: 'app-model',
  imports: [],
  templateUrl: './model.html',
  styleUrl: './model.css',
})
export class Model {
  // Use model() for UI components that need to update their own value (form controls, toggles)

  // This automatically creates an output named "checkedChange".
  // Can be subscribed to using `(checkedChange)="handler()"` in the template.

  checked = model.required<boolean>();

  // Use input() for data that only flows down (display data, configuration)
  label = input<string>();

  // You can bind a plain JavaScript property to a model input. The parent component does not have to use Signals. 
  // You can bind a regular class variable (like tooltip = 'Hello';) to it, and Angular handles the synchronization
  // behind the scenes. Check out the `input-output` component
  tooltip = model<string>();

  toggle() {
    this.checked.set(!this.checked());
  }
}

import {Component, HostAttributeToken, booleanAttribute, inject, input} from '@angular/core';

// Avoid choosing input names that collide with properties on DOM elements like HTMLElement

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  message = input.required<string>();

  // The type of the transform function's parameter (in this example - `number`) determines the types of 
  // values that can be set to the input in a template
  number = input('', {
    transform: (value: number): string => {
      return `${value}px`;
    }
  });

  // Built-in transformation
  disabled = input(false, { transform: booleanAttribute });

  // Input alias
  name = input('', { alias: 'preferredName' });

  // Inject host element attributes: Creates a token that can be used to inject static attributes of the 
  // host node. Check out `input-output.html`
  variation = inject(new HostAttributeToken('variation'));

  ngOnInit() {
    // Components and directives can read static attributes from their host element
    console.log('Variation: ' + this.variation);
  }
}

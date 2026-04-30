import {Component, input} from '@angular/core';

@Component({
  selector: 'app-input',
  template: `
    Username: {{ name() }}
  `
})
export class Input {
  name = input.required<string>();
}

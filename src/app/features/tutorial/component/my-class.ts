import { Component } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  template: `
    <button (click)="blueClass = !blueClass" [class.blue]="blueClass">Click me!</button>
  `,
  styles: `
    .blue {
      background-color: blue;
      color: white;
    }
  `,
})
export class MyClass {
  blueClass = false;
}

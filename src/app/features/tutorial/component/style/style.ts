import { Component, ViewEncapsulation, signal } from '@angular/core';

// ViewEncapsulation.Emulated (default)
//   A component's styles only apply to elements defined in that component's template

// ViewEncapsulation.ShadowDom
//   Angular attaches a shadow root to the component's host element and renders the component's 
//   template and styles into the corresponding shadow tree

// ViewEncapsulation.ExperimentalIsolatedShadowDom

// ViewEncapsulation.None
//   Disable all style encapsulation for the component

@Component({
  selector: 'app-style',
  imports: [],
  templateUrl: './style.html',
  styleUrl: './style.css',
  encapsulation: ViewEncapsulation.Emulated,

  // A component can bind properties, attributes, styles and events to its host element. 
  // This behaves identically to bindings on elements inside the component's template.
  host: {
    'role': 'slider',
    '[attr.aria-valuenow]': 'value',
    '[class.active]': 'isActive()',
    '[style.background]': `hasError()? 'red' : 'green'`,
    '[tabIndex]': 'disabled? -1: 0',
    '(keydown)': 'updateValue($event)'
  }
})
export class Style {
  fontSize = 16;
  value = 0;
  disabled = false;

  isActive = signal(false);
  hasError = signal(false);

  incrementFontSize () {
    this.fontSize++;
  }

  updateValue($event: KeyboardEvent) {
    console.log($event);
  }
}

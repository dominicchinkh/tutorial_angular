import { Component, ElementRef, OnInit, input } from '@angular/core';

/*-------------
 * Inheritance
 *
 * When a component extends another component or a directive, it inherits some of 
 * the metadata defined in the base class's decorator and the base class's decorated 
 * members. This includes host bindings, inputs, outputs, lifecycle methods.
 * 
 */

@Component({
  selector: 'app-property-binding-base',
  template: ``,
  host: {
    '(keyDown)': 'handleKey($event)'
  }
})
export class PropertyBindingBase implements OnInit {
  value = input<string>('');

  protected isInitialized = false;

  constructor(private element: ElementRef) {
  }
  
  ngOnInit() {
    this.isInitialized = true;
  }

  handleKey($event: Event) {
  }
}

@Component({
  selector: 'app-property-binding',
  imports: [],
  templateUrl: './property-binding.html',
  styleUrl: './property-binding.css',
})
export class PropertyBinding extends PropertyBindingBase {
  isEditable = true;

  constructor(element: ElementRef) {
    // If a base class injects dependencies as constructor parameters, the child class must 
    // explicitly class these dependencies to super.
    super(element);
  }

  override ngOnInit() {
    // If a base class defines a lifecycle method, such as ngOnInit, a child class that also 
    // implements ngOnInit overrides the base class's implementation. If you want to preserve 
    // the base class's lifecycle method, explicitly call the method with super.
    super.ngOnInit();
  }
}

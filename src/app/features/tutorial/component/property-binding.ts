import {Component} from '@angular/core';

@Component({
    selector: 'app-property-binding',
    template: `
        <div class="editable-box" [contentEditable]="isEditable"></div>
    `,
    styles: `
        .editable-box {
            min-height: 1.0rem;
            border: 2px solid #2563eb;
            width: 20ch;
            overflow-wrap: break-word;
        }
    `
})
export class PropertyBinding {
  isEditable = true;
}
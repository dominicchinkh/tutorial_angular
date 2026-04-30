import {Component} from '@angular/core';

@Component({
    selector: 'app-style',
    template: `
        <button (click)="incrementFontSize()" [style.font-size.px]="fontSize">Click me!</button>
    `
})
export class Style {
    fontSize = 16;

    incrementFontSize () {
        this.fontSize++;
    }
}
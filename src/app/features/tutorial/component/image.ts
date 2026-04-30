import {Component} from '@angular/core';
import {NgOptimizedImage, provideImgixLoader} from '@angular/common';

@Component({
    selector: 'app-image',
    template: `
        <ul>
            <li>
                Static Image:
                <img ngSrc="./logo.png" alt="Angular logo" width="32" height="32" />
            </li>
            <li>
                Dynamic Image:
                <img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" priority />
            </li>
        </ul>
    `,
    imports: [NgOptimizedImage],
    providers: [provideImgixLoader('http://localhost:4200/')]
})
export class Image {
    logoUrl = "logo.png";
    logoAlt = "Angular logo";
}
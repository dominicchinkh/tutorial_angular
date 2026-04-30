import { Component } from '@angular/core';

@Component({
    selector: 'app-content-projection',
    template: `
        <div>
            <p>This is the content</p>
            <ng-content></ng-content>
        </div>
    `
})
export class ContentProjection {
}
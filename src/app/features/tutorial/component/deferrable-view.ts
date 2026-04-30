import {Component} from '@angular/core';

@Component({
    selector: 'app-comments',
    template: `
        <ul>
            <li>Building for the web is fantastic!</li>
            <li>The new template syntax is great</li>
            <li>I agree with the other comments</li>
        </ul>
    `
})
export class Comments {
}

@Component({
    selector: 'app-deferrable-view',
    template: `
        @defer (on viewport) {
            <app-comments />
        }
        @placeholder {
            <p>Future comments</p>
        }
        @loading (minimum 2s) {
            <p>Loading comments...</p>
        }
    `,
    imports: [Comments]
})
export class DeferrableView {
}

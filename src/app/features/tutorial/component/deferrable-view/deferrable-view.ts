import { Component } from '@angular/core';

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
  imports: [Comments],
  templateUrl: './deferrable-view.html',
  styleUrl: './deferrable-view.css',
})
export class DeferrableView {}

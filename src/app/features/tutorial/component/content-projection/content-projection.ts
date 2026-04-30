import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  template: `
    <div>
        <ng-content></ng-content>
    </div>
  `
})
export class Content {
}

@Component({
  selector: 'app-content-projection',
  imports: [Content],
  templateUrl: './content-projection.html',
  styleUrl: './content-projection.css',
})
export class ContentProjection {
}

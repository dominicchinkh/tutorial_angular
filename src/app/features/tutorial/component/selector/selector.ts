import { Component } from '@angular/core';

// All custom element names should include a hyphen
// https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name

//-----------------------
// The :not pseudo-class

// You can also define multiple selectors with a comma-separated list
@Component({
  selector: 'drop-zone, [dropzone]:not(p)',
  template: `<h3>Drop zone</h3>`
})
export class DropZone {}

//---------------------
// Combining selectors

@Component({
  selector: 'button[type="reset"]',
  template: `<h3>Reset button</h3>`
})
export class ResetButton {}

//--------------------
// Attribute selector

@Component({
  selector: 'button[yt-upload]',
  template: `<h3>Youtube Upload Button</h3>`
})
export class YouTubeUploadButton {}

@Component({
  selector: 'app-selector',
  imports: [DropZone, ResetButton, YouTubeUploadButton],
  templateUrl: './selector.html',
  styleUrl: './selector.css',
})
export class Selector {}

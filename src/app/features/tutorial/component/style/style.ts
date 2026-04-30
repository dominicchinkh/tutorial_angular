import { Component } from '@angular/core';

@Component({
  selector: 'app-style',
  imports: [],
  templateUrl: './style.html',
  styleUrl: './style.css',
})
export class Style {
  fontSize = 16;

  incrementFontSize () {
    this.fontSize++;
  }
}

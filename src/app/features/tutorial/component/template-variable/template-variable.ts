import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  imports: [],
  templateUrl: './template-variable.html',
  styleUrl: './template-variable.css',
})
export class TemplateVariable {
  search(value: string) {
    alert(`Search for ${value}`);
  }
}

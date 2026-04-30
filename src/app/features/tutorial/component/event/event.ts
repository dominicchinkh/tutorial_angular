import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.html',
  styleUrl: './event.css',
})
export class Event {
  message = '';

  clearSecretMessage() {
      this.message = '';
  }

  showSecretMessage() {
      this.message = 'Way to go 🚀';
  }

  changeMessage(event: KeyboardEvent) {
      this.message = (event.target as HTMLInputElement).value;
  }
}
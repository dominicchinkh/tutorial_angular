import {Component} from '@angular/core';

@Component({
    selector: 'app-event',
    template: `
        <section (mouseover)="showSecretMessage()">
            There's a secret message for you, hover to reveal: {{ message }}
        </section>

        <input (keyup)="changeMessage($event)" [value]="message" />

        <button (click)="clearSecretMessage()">Hide the message</button>
    `
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
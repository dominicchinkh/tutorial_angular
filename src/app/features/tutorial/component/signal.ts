import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-signal',
    template: `
        {{ name() }}
    `
})
export class Signal {
    name = signal('dominic');
}
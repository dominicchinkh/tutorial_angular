import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
    selector: 'app-template-driven-form',
    template: `
        <p>Username: {{ username }}</p>
        <p>{{ username }}'s favourite framework: {{ favouriteFramework }}</p>
        
        <label for="framework">
            Favourite Framework:
            <input id="framework" type="text" [(ngModel)]="favouriteFramework"/>
        </label>

        <button (click)="showFramework()">Show Framework</button>
    `,
    imports: [FormsModule]
})
export class TemplateDrivenForm{
    username = 'Dominic';
    favouriteFramework = '';

    showFramework() {
        alert(this.favouriteFramework);
    }
}
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.css',
})
export class TemplateDrivenForm{
    username = 'Dominic';
    favouriteFramework = '';

    showFramework() {
        alert(this.favouriteFramework);
    }
}

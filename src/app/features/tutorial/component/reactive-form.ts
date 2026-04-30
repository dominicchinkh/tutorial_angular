import {Component} from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-reactive-form',
    template: `
        <form [formGroup]="profileForm" (ngSubmit)="handleForm()">
            <label>
                Name
                <input type="text" formControlName="name" />
            </label>
            <label>
                Email
                <input type="email" formControlName="email" />
            </label>
            <button type="submit" [disabled]="!profileForm.valid">Submit</button>
        </form>

        <h2>Profile Form</h2>
        <p>Name: {{ profileForm.value.name }}</p>
        <p>Email: {{ profileForm.value.email }}</p>
    `,
    imports: [ReactiveFormsModule]
})
export class ReactiveForm {
    profileForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
    });

    handleForm() {
        alert(
            this.profileForm.value.name + ' | ' + this.profileForm.value.email
        );
    }
}

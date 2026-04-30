import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
        <a routerLink="/">Home</a>
        |
        <a routerLink="/control-flow">Control flow</a>
        |
        <a routerLink="/deferrable-view">Deferrable View</a>
        |
        <a routerLink="/event">Event</a>
        |
        <a routerLink="/image">Image</a>
        |
        <a routerLink="/property-binding">Property Binding</a>
        |
        <a routerLink="/input-output">Input/Output</a>
        |
        <a routerLink="/template-driven-form">Template Driven Form</a>
        |
        <a routerLink="/reactive-form">Reactive Form</a>
        |
        <a routerLink="/injectable-service">Injectable Service</a>
        |
        <a routerLink="/pipe">Pipe</a>
        |
        <a routerLink="/signal">Signal</a>
        |
        <a routerLink="/lifecycle-hook">Lifecycle Hook</a>
        |
        <a routerLink="/class">Class</a>
        |
        <a routerLink="/style">Style</a>
    </nav>
    <router-outlet />
   `,
  imports: [RouterLink, RouterOutlet]
})
export class App {
}

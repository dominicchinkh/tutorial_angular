import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <header>
        <a [routerLink]="['/']">
          <img class="brand-logo" src="logo.png" alt="logo" aria-hidden="true" />
        </a>
      <nav>
          <a routerLink="/">Home</a>
          |
          <a routerLink="/signal">Signal</a>
          |
          <a routerLink="/effect">Effect</a>
          |
          <a routerLink="/property-binding">Property Binding</a>
          |
          <a routerLink="/event">Event</a>
          |
          <a routerLink="/template-variable">Template Variable</a>
          |
          <a routerLink="/reactive-form">Reactive Form</a>
          |
          <a routerLink="/signal-form">Signal Form</a>
          |
          <a routerLink="/template-driven-form">Template Driven Form</a>
          |
          <a routerLink="/input-output">Input/Output</a>
          |
          <a routerLink="/content-projection">Content Projection</a>
          |
          <a routerLink="/pipe">Pipe</a>
          |
          <a routerLink="/control-flow">Control flow</a>
          |
          <a routerLink="/style">Style</a>
          |
          <a routerLink="/class">Class</a>
          |
          <a routerLink="/directive">Directive</a>
          |
          <a routerLink="/image">Image</a>
          |
          <a routerLink="/lifecycle-hook">Lifecycle Hook</a>
          |
          <a routerLink="/injectable-service">Injectable Service</a>
          |
          <a routerLink="/deferrable-view">Deferrable View</a>
      </nav>
    </header>
    <section>
      <router-outlet />
    </section>
   `,
  imports: [RouterLink, RouterOutlet]
})
export class App {
}

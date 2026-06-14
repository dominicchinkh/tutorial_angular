import { Component, Inject, PLATFORM_ID, afterRenderEffect, computed, effect, signal, untracked } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-effect',
  imports: [],
  templateUrl: './effect.html',
  styleUrl: './effect.css',
})
export class Effect {
  theme = signal<'light' | 'dark'>('light');
  themeClass = computed(() => `theme-${this.theme()}`);

  count = signal(0)

  isLoggedIn = signal(false);
  username = signal('Guest');

  constructor(@Inject(PLATFORM_ID) private platformId: object) {

    // effect() is a reactive primitive introduced alongside Angular Signals. It 
    // allows you to write an operation that automatically executes whenever one 
    // or more signal values change.

    // Effects always run at least once

    // Effects always execute asynchronously, during the change detection process

    // Effects run before the Angular updates the DOM

    //-------------------------------------------------
    // Save theme to local storage whenever it changes

    // localStorage is a browser-only API, it does not exist in the Node.js environment 
    // where the code runs during the initial server-side render
    
    effect(() => {
      // Ensure the code only runs when the application is active in the user's browser
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', this.theme());
        console.log('Theme saved to local storage:', this.theme());
      }
    });

    //---------------------------
    // Log user activity changes
    effect((onCleanup) => {
      const status = this.isLoggedIn()? 'Logged in': 'Logged out';

      // `untracked` prevent a signal read from `count` being tracked by calling its getter 
      console.log(`User is ${status}`, untracked(this.count));

      // When you create an effect, your function can optionally accept an `onCleanup` function 
      // as its first parameter. This `onCleanup` function lets you register a callback that is 
      // invoked before the next run of the effect begins, or when the effect is destroyed.
      onCleanup(() => {
        console.log('Cleaning up...');
      })
    });

    //---------------------------------------------------------------------------------
    // The reactive context is only active for synchronous code. Any signal reads that 
    // occur after an asynchronous boundary will not be tracked as dependencies.

    let e = effect(async () => {
      // To ensure all signal reads are tracked, read signals before the await. This includes 
      // passing them as arguments to the awaited function, since arguments are evaluated synchronously
      console.log(`User is using theme: ${this.theme()}`)

      await new Promise(() => {
        setTimeout(() => {}, 2000);
      });
      
      // Reactive context is lost here - theme() won't be tracked
      console.log(`User is using theme: ${this.theme()}`)
    });

    // e.destroy();

    //------------------------------
    // Side effects on DOM elements
    // `afterRenderEffect` run after Angular has finished rendering and committed its changes to the DOM.

    // https://angular.dev/guide/signals/effect#side-effects-on-dom-elements

    // You often don't need `afterRenderEffext` to check for DOM changes. APIs like ResizeObservar, 
    // MutationObserver and IntersectionObserver are preferred to `effect` or `aterRenderEffect` 
    // when possible

    // Example: Create a chart instance

    afterRenderEffect({

      // Example: Update chart data

      // Read from the DOM before a subsequent write callback
      earlyRead: (cleanupFn) => {},

      // Write to the DOM
      write: (previousPhaseValue, cleanupFn) => {},

      // Read from and write to the DOM
      // If you don't specify the phase, `afterRendererEffect` runs callback during this phase
      mixedReadWrite: (previousPhaseValue, cleanupFn) => {}, 

      // Read from the DOm
      read: (previousPhaseValue, cleanupFn) => {}
    });
  }

  toggleTheme() {
    this.theme.set(this.theme() === 'light'? 'dark': 'light');
  }

  login() {
    this.isLoggedIn.set(true);
    this.username.set('John Doe');
  }

  logout() {
    this.isLoggedIn.set(false);
    this.username.set('Guest');
  }

  increaseCount() {
    this.count.update((value) => { return value + 1; });
  }
}

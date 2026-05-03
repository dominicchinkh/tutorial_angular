import { Component, Inject, PLATFORM_ID, computed, effect, signal } from '@angular/core';
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

  isLoggedIn = signal(false);
  username = signal('Guest');

  // localStorage is a browser-only API, it does not exist in the Node.js environment 
  // where the code runs during the initial server-side render
  constructor(@Inject(PLATFORM_ID) private platformId: object) {

    // Save theme to local storage whenever it changes
    effect(() => {
      // Ensure the code only runs when the application is active in the user's browser
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem('theme', this.theme());
        console.log('Theme saved to local storage:', this.theme());
      }
    });

    // Log user activity changes
    effect(() => {
      const status = this.isLoggedIn()? 'Logged in': 'Logged out';
      console.log(`User is ${status}`);
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
}

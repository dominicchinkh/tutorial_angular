import { Component, HOST_TAG_NAME, forwardRef, Injectable, InjectionToken, Injector, inject } from '@angular/core';
import { environment } from '../../../../../environments/environment';

/*----------------------------------------
 * InjectionToken: class dependencies
 */

@Injectable(
)
export class LocalService
{
}

@Injectable(
)
export class CloudService
{
}

export class LoggerService
{
  constructor(
    private apiUrl: string,
    private version: string
  ) {
  }
}

export const LoggerServiceFactory = (config: Config) => {
  return new LoggerService(config.apiUrl, config.version);
}

/*----------------------------------------
 * InjectionToken: non-class dependencies
 */

// Create a token for a string value
export const API_URL = new InjectionToken<string>('api.url');

// Create a token for a function
export const LOGGER = new InjectionToken<(level: string, message: string) => void>('logger.function', {
  providedIn: 'root',
  factory: () => {
    const config = inject(CONFIG_TOKEN);

    return (level: string, message: string) => {
      if (config.version === '1.0.0') {
        return `${level}: ${message}`;
      }
      return `${level} - ${message}`;
    }
  }
});

// Create a token for a complex type
export interface Config {
  apiUrl: string;
  version: string;
  features: Record<string, boolean>;
}
export const CONFIG_TOKEN = new InjectionToken<Config>('api.config', {
  providedIn: 'root',
  factory: () => ({
    apiUrl: 'https://api.example.com',
    version: '1.0.0',
    features: {
      darkMode: true,
      analytics: false
    }
  })
});

// Providing browser APIs as tokens
export const LOCAL_STORAGE = new InjectionToken<Storage>('localStorage', {
  providedIn: 'root',
  factory: () => window.localStorage
})

export const SESSION_STORAGE = new InjectionToken<Storage>('sessionStorage', {
  providedIn: 'root',
  factory: () => window.sessionStorage
})

@Component({
  selector: 'app-dependency-injection',
  imports: [],
  templateUrl: './dependency-injection.html',
  styleUrl: './dependency-injection.css',
  providers: [

    /*------------
     * `useClass` 
     *
     * provides a JavaScript class as a dependency. This is the default when using the shorthand 
     * syntax: `providers: [LocalService]`.
     * 
     */
    { provide: LocalService, useClass: environment.production? CloudService : LocalService },

    /*------------
     * `useValue` 
     *
     *  provides any JavaScript data type as a static value
     * 
     */
    { provide: API_URL, useValue: 'https://api.example.com' },


    /*--------------
     * `useFactory` 
     *
     *  provides a function that generates a new value for injection
     * 
     */
    { provide: LoggerService,
      useFactory: LoggerServiceFactory,
      deps: [{
        apiUrl: 'https:/api.example.com',
        version: '1.0.0',
        features: {}
      }]}
  ]
})
export class DependencyInjection {
  config = inject(CONFIG_TOKEN);

  // When you need to retrieve services outside an injection context, use the 
  // captured Injector directly with injector.get()
  private injector = inject(Injector);

  private tagName = inject(HOST_TAG_NAME);
  constructor() {
    // Expect; #host
    console.log(this.tagName);
  }

  delayedLoad() {
    setTimeout(() => {
      const localService = this.injector.get(LocalService);
      // do something
    }, 1000);
  }
}

// A class makes a reference to itself
@Component({
  selector: 'app-menu-item',
  template: ``,
  providers: [
    { provide: MenuItem, useExisting: forwardRef(() => MenuItem) }
  ]
})
export class MenuItem {
}

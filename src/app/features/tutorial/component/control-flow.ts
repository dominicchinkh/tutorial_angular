import {Component} from '@angular/core'

@Component({
    selector: 'app-control-flow',
    template: `
        @if (isLoggedIn) {
            <p>Welcome back, Friend!</p>
        }

        @if (isServerRunning) {
            <span>Yes, the server is running</span>
        } 
        @else {
            <span>No, the server is not running</span>
        }

        <ul>
        @for (os of operatingSystems; track os.id) {
            <li>{{ os.name }}</li>
        }
        </ul>

        <ul>
        @for (user of users; track user.id) {
            <li>{{ user.name }}</li>
        }
        </ul>
    `
})
export class ControlFlow {
  isLoggedIn = true;
  isServerRunning = true;

  operatingSystems = [
    { id: 'win',   name: 'Windows'  }, 
    { id: 'osx',   name: 'MacOS'    },
    { id: 'linux', name: 'Linux'    }
  ];

  users = [
    { id: 0, name: 'Sarah'    },
    { id: 1, name: 'Amy'      },
    { id: 2, name: 'Rachel'   },
    { id: 3, name: 'Jessica'  },
    { id: 4, name: 'Poornima' }
  ];

}
import { Component } from '@angular/core';
import { User } from '../../model/user';
import { OperatingSystem } from '../../model/operating-system';

@Component({
  selector: 'app-control-flow',
  imports: [],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isLoggedIn = true;
  isServerRunning = true;

  operatingSystems: OperatingSystem[] = [
    { id: 'win',   name: 'Windows'  }, 
    { id: 'osx',   name: 'MacOS'    },
    { id: 'linux', name: 'Linux'    }
  ];

  users: User[] = [
    { id: 0, name: 'Sarah'    },
    { id: 1, name: 'Amy'      },
    { id: 2, name: 'Rachel'   },
    { id: 3, name: 'Jessica'  },
    { id: 4, name: 'Poornima' }
  ];
}

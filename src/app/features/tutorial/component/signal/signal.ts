import { 
  ChangeDetectionStrategy, 
  Component,
  Resource,
  ResourceSnapshot,
  linkedSignal,
  resource,
  resourceFromSnapshots,
  signal, 
  computed 
} from '@angular/core';
import { httpResource } from '@angular/common/http';
import isEqual from 'lodash/isEqual';
import { getUserData } from './user-api';
import { User } from '../../model/user';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Signal {
  userId = signal<number>(1);
  userStatus = signal<'online' | 'offline' | 'away'>('offline');
  
  //------------------
  // Computed signals: Read-only, always derived from other signals
  statusMessage = computed(() => {
    const status = this.userStatus();

    switch(status) {
      case 'online':
        return 'Available for meetings and messages';
      case 'offline':
        return 'Not available, check back later';
      case 'away':
        return 'Temporarily away, will respond soon';
      default:
        return 'Status unknown';
    }
  });

  isWithinWorkingHours = computed(() => {
    const now = new Date();
    const hour = now.getHours();
    const isWeekday = now.getDay() > 0 && now.getDay() < 6;
    return isWeekday && hour >= 9 && hour < 17 && this.userStatus() !== 'offline'
  });

  //----------------
  // Linked signals: Writable, can be both derived AND manually updated

  // This is the key difference: computed signals are read-only, but linked signals 
  // can be updated manually while still maintaining their reactive connection.
  notificationsEnabled = linkedSignal(() => this.userStatus() === 'online');

  //-----------
  // Resource: To simplify asynchronous data fetching and state management using Signals
  userResource = resource({

    // The param value recomputes whenever any read signals change
    params: () => ({ id: this.userId() }),

    // The resource calls this function every time the `params` value changes

    // If the `params` computation returns `undefined`, the loader function does not run and 
    // the resource status become `idle`

    // More on `AbortSignal`: https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
    loader: ({params, abortSignal}) => getUserData(params.id)
  });

  // https://angular.dev/guide/signals/resource#resource-status
  isLoading = computed(() => this.userResource.status() === 'loading');
  hasError  = computed(() => this.userResource.status() === 'error');

  constructor() {

    //--------------------------
    // Signal equality function

    // https://angular.dev/guide/signals#signal-equality-functions

    const data = signal(['test'], {equal: isEqual});

    // Even though this is a different array instance, the deep equality
    // function will consider the values to be equal, and the signal won't
    // trigger any updates.
    
    // By default, signals use referential equality (Object.is() comparison).
    data.set(['test']);

    //-------------------------------------------------------
    // `linkedSignal` with a separate source and computation

    // https://angular.dev/guide/signals/linked-signal#accounting-for-previous-state

    // The following example shows how the value of a linkedSignal can change based on its linked state
    const users = signal<User[]>([
      { id: 0, name: 'Sarah'    },
      { id: 1, name: 'Amy'      },
      { id: 2, name: 'Rachel'   },
      { id: 3, name: 'Jessica'  },
      { id: 4, name: 'Poornima' }
    ]);
    
    const selectedOption = linkedSignal<User[], User>({
      
      // `selectedOption` is set to the `computation` result whenever this `source` changes
      source: users,

      // If the `newOptions` contain the previously selected option, preserve that selection.
      // Otherwise, default to the first option.
      computation: (newOptions, previous) => {
        return newOptions.find((opt) => opt.id === previous?.value.id)?? newOptions[0]
      },

      // A custom equality function used by downstream dependencies to determine if that value 
      // of the linkedSignal (result of a computation) changed:
      equal: (a, b) => a.name === b.name
    });

    console.log(selectedOption()); // 'Sarah'

    selectedOption.set(users()[2]); 
    console.log(selectedOption()); // 'Rachel'

    users.set([      
      { id: 0, name: 'John'    },
      { id: 1, name: 'Peter'   },
      { id: 2, name: 'Andrew'  },
      { id: 3, name: 'Stephen' }
    ]);
    console.log(selectedOption()); // 'Andrew'

    //-----------------------------------
    // Composing resource with snapshots

    // https://angular.dev/guide/signals/resource#composing-resources-with-snapshots

    // `httpResource` makes a reactive HTTP request and exposes the request status and response 
    // value as a WritableResource

    // https://angular.dev/guide/signals/resource#reactive-data-fetching-with-httpresource
    const user = this.withPreviousValue(httpResource(() => `http://localhost:3000/users/${this.userId()}`));
  }

  goOnline() {
    this.userStatus.set('online');
  }

  goOffline() {
    this.userStatus.set('offline');
  }

  goAway() {
    this.userStatus.set('away');
  }

  toggleStatus() {
    this.userStatus.update(current => current === 'online'? 'offline': 'online');
  }

  toggleNotification() {
    this.notificationsEnabled.set(!this.notificationsEnabled());
  }

  loadUser(id: number) {
    this.userId.set(id);
  }

  reloadUser() {
    this.userResource.reload();
  }

  withPreviousValue<T>(input: Resource<T>): Resource<T> {
    const derived = linkedSignal<ResourceSnapshot<T>, ResourceSnapshot<T>>({
      source: input.snapshot,
      computation: ((snap, previous) => {
        if (snap.status === 'loading' && previous && previous.value.status != 'error') {
          // When the input resource enters loading state, we keep the value from its previous state,
          // if any
          return { 'status': 'loading' as const, value: previous.value.value };
        }

        // Otherwise, we simply forward the state of the input resouce
        return snap;
      })
    })

    return resourceFromSnapshots(derived);
  }  
}

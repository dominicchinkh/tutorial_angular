import { 
  ChangeDetectionStrategy, 
  Component, 
  linkedSignal,
  resource,
  signal, 
  computed 
} from '@angular/core';
import { getUserData } from './user-api';

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
    params: () => ({ id: this.userId() }),
    loader: (params) => getUserData(params.params.id)
  });

  isLoading = computed(() => this.userResource.status() === 'loading');
  hasError  = computed(() => this.userResource.status() === 'error');

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
}

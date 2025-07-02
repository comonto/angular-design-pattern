import { Component } from '@angular/core';
import { NotificationComponent } from './features/notification/notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NotificationComponent],
  template: `
    <app-notification></app-notification>
  `
})
export class AppComponent {
}

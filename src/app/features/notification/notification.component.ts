import { Component } from '@angular/core';
import { NotificationFactoryService } from './factory/notification-factory';

@Component({
    selector: 'app-notification',
    standalone: true,
    imports: [],
    template: `
    <h1>Notification Factory (Angular 17+)</h1>
    <button (click)="send('email')">Email</button>
    <button (click)="send('sms')">SMS</button>
    <button (click)="send('push')">Push</button>
  `
})
export class NotificationComponent {
  constructor(private factory: NotificationFactoryService) {}

  send(type: 'email' | 'sms' | 'push') {
    const notification = this.factory.create(type);
    notification.send(`Messaggio inviato tramite ${type}`);
  }
}

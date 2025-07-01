import { Injectable } from '@angular/core';
import { Notification } from './notification.interface';

@Injectable()
export class PushNotificationService implements Notification {
  send(message: string): void {
    console.log(`🔔 Push: ${message}`);
  }
}

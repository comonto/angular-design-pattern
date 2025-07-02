import { Injectable } from '@angular/core';
import { Notification } from '../interfaces/notification.interface';

@Injectable()
export class PushNotificationService implements Notification {
  send(message: string): void {
    console.log(`🔔 Push: ${message}`);
  }
}

import { Injectable } from '@angular/core';
import { Notification } from './notification.interface';

@Injectable()
export class EmailNotificationService implements Notification {
  send(message: string): void {
    console.log(`📧 Email: ${message}`);
  }
}

import { Injectable } from '@angular/core';
import { Notification } from '../interfaces/notification.interface';

@Injectable()
export class EmailNotificationService implements Notification {
  send(message: string): void {
    console.log(`📧 Email: ${message}`);
  }
}

import { Injectable } from '@angular/core';
import { Notification } from '../interfaces/notification.interface';

@Injectable()
export class SMSNotificationService implements Notification {
  send(message: string): void {
    console.log(`📱 SMS: ${message}`);
  }
}

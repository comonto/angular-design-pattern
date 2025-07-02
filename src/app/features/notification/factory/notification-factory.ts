import { inject, Injectable } from '@angular/core';
import { Notification } from '../interfaces/notification.interface';
import {
  EMAIL_NOTIFICATION,
  PUSH_NOTIFICATION,
  SMS_NOTIFICATION
} from '../services/notification-tokens';

@Injectable({ providedIn: 'root' })
export class NotificationFactoryService {
  private email = inject(EMAIL_NOTIFICATION);
  private sms = inject(SMS_NOTIFICATION);
  private push = inject(PUSH_NOTIFICATION);

  create(type: 'email' | 'sms' | 'push'): Notification {
    switch (type) {
      case 'email': return this.email;
      case 'sms': return this.sms;
      case 'push': return this.push;
      default: throw new Error('Tipo non supportato');
    }
  }
}

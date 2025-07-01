import { ApplicationConfig } from '@angular/core';
import { EmailNotificationService } from './notifications/email-notification.service';
import { SMSNotificationService } from './notifications/sms-notification.service';
import { PushNotificationService } from './notifications/push-notification.service';
import { EMAIL_NOTIFICATION, SMS_NOTIFICATION, PUSH_NOTIFICATION } from './notifications/notification-tokens';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: EMAIL_NOTIFICATION, useClass: EmailNotificationService },
    { provide: SMS_NOTIFICATION, useClass: SMSNotificationService },
    { provide: PUSH_NOTIFICATION, useClass: PushNotificationService },
  ]
};

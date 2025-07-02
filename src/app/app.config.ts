import { ApplicationConfig } from '@angular/core';
import { EmailNotificationService } from './features/notification/services/email-notification';
import { SMSNotificationService } from './features/notification/services/sms-notification';
import { PushNotificationService } from './features/notification/services/push-notification';
import { EMAIL_NOTIFICATION, SMS_NOTIFICATION, PUSH_NOTIFICATION } from './features/notification/services/notification-tokens';

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: EMAIL_NOTIFICATION, useClass: EmailNotificationService },
    { provide: SMS_NOTIFICATION, useClass: SMSNotificationService },
    { provide: PUSH_NOTIFICATION, useClass: PushNotificationService },
  ]
};

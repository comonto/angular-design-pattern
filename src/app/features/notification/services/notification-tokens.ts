import { InjectionToken } from '@angular/core';
import { Notification } from '../interfaces/notification.interface';

export const EMAIL_NOTIFICATION = new InjectionToken<Notification>('EMAIL_NOTIFICATION');
export const SMS_NOTIFICATION = new InjectionToken<Notification>('SMS_NOTIFICATION');
export const PUSH_NOTIFICATION = new InjectionToken<Notification>('PUSH_NOTIFICATION');

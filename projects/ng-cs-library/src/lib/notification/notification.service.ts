import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { I_Notification } from '../../types';

@Injectable()
export class NotificationService {
	notifications: BehaviorSubject<I_Notification[]> = new BehaviorSubject([]);
	constructor() {}
	addNotification(notification: I_Notification): void {
	  if (!notification.type) {
		notification.type = "default";
	  }
	  let tempList: I_Notification[] = this.notifications.value;
	  tempList.push(notification);
	  this.notifications.next(tempList);
	}
	removeNotification(notification: I_Notification): void {
	  let tempList: I_Notification[] = this.notifications.value;
	  tempList.splice(tempList.indexOf(notification), 1);
	  this.notifications.next(tempList);
	}
	clearNotifications(): void {
	  this.notifications.next([]);
	}
}

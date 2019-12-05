import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { I_Notification } from 'projects/ng-cs-library/src/types';
import { NotificationService } from '../notification.service';

@Component({
  selector: "cs-notification",
  templateUrl: "./notification-list.component.html",
  styleUrls: ["./notification-list.component.less"]
})
export class NotificationListComponent implements OnInit {
  notifications: I_Notification[];
  private notificationSubscription: Subscription;
  constructor(private notificationService: NotificationService) {}
  ngOnInit() {
    this.notificationSubscription = this.notificationService.notifications.subscribe(result => {
      this.notifications = result;
    });
  }
  ngOnDestroy() {
    this.notificationSubscription.unsubscribe();
  }
}

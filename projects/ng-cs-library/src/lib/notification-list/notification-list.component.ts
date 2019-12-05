import { Component, OnInit } from "@angular/core";
import { I_Notification } from "../../types";
import { Subscription } from "rxjs";
import { NgCsLibraryService } from "../ng-cs-library.service";

@Component({
  selector: "cs-notification",
  templateUrl: "./notification-list.component.html",
  styleUrls: ["./notification-list.component.less"]
})
export class NotificationListComponent implements OnInit {
  notifications: I_Notification[];
  private notificationSubscription: Subscription;
  constructor(private libraryService: NgCsLibraryService) {}
  ngOnInit() {
    this.notificationSubscription = this.libraryService.notifications.subscribe(result => {
      this.notifications = result;
    });
  }
  ngOnDestroy() {
    this.notificationSubscription.unsubscribe();
  }
}

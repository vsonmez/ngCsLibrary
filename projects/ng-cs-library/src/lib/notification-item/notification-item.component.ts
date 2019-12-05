import { Component, OnInit, Input } from "@angular/core";
import { I_Notification } from "../../types";
import { interval, Subscription } from "rxjs";
import { NgCsLibraryService } from "../ng-cs-library.service";

@Component({
  selector: "cs-notification-item",
  templateUrl: "./notification-item.component.html",
  styleUrls: ["./notification-item.component.less"]
})
export class NotificationItemComponent implements OnInit {
  @Input() notification: I_Notification;
  private removeTimer = interval(1000);
  private timerSubscription: Subscription;
  constructor(private libraryService: NgCsLibraryService) {}
  ngOnInit() {
    this.timerSubscription = this.removeTimer.subscribe(time => {
      if (time === 5) {
        this.remove();
      }
    });
  }
  remove() {
    this.libraryService.removeNotification(this.notification);
    setTimeout(() => {
      this.timerSubscription.unsubscribe();
    });
  }
}

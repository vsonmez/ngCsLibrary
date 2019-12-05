import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationItemComponent } from './notification-item/notification-item.component';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [NotificationItemComponent, NotificationListComponent],
  imports: [ CommonModule, NotificationRoutingModule ],
  exports: [NotificationListComponent]
})
export class NotificationModule { }

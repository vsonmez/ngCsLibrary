import { NgModule } from "@angular/core";
import { NgCsLibraryComponent } from "./ng-cs-library.component";
import { SpinnerComponent } from "./spinner/spinner.component";
import { PanelComponent } from './panel/panel.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';
import { NotificationListComponent } from './notification-list/notification-list.component';
import { NotificationItemComponent } from './notification-item/notification-item.component';

@NgModule({
  declarations: [NgCsLibraryComponent, SpinnerComponent, PanelComponent, ModalComponent, NotificationListComponent, NotificationItemComponent],
  imports: [CommonModule, RouterModule],
  exports: [SpinnerComponent, PanelComponent, ModalComponent, NotificationListComponent]
})
export class NgCsLibraryModule {}

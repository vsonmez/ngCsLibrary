import { NgModule } from "@angular/core";
import { SpinnerComponent } from "./spinner/spinner.component";
import { PanelComponent } from './panel/panel.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SpinnerComponent, PanelComponent, ModalComponent],
  imports: [CommonModule, RouterModule]
})
export class NgCsLibraryModule {}

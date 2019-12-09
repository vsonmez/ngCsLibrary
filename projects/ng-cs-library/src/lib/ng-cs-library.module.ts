import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgCsLibraryComponent } from './ng-cs-library.component';

@NgModule({
  declarations: [NgCsLibraryComponent],
  imports: [CommonModule, RouterModule],
  exports: []
})
export class NgCsLibraryModule {}

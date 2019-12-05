import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgCsLibraryModule} from "ng-cs-library";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgCsLibraryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

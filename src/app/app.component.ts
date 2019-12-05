import { Component } from "@angular/core";
import { NgCsLibraryService } from "projects/ng-cs-library/src/public-api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  constructor(private libraryService: NgCsLibraryService) {
	  libraryService.addNotification({
		  text: "Lorem",
		  type: "danger"
	  });
  }
}

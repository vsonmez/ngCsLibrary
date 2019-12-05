import { Component } from "@angular/core";
import {NotificationService} from "ng-cs-library";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})
export class AppComponent {
  constructor(private not: NotificationService) { }
  ngOnInit(){
	this.not.addNotification({
		text: "Lorem",
		type: "danger"
	});
  }
}

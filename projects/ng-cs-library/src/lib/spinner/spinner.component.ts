import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "cs-spinner",
  templateUrl: "./spinner.component.html",
  styleUrls: ["./spinner.component.less"]
})
export class SpinnerComponent implements OnInit {
  @Input() icon: string = "spinner"
  @Input() show: boolean;
  constructor() {}
  ngOnInit() {}
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "cs-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.less"]
})
export class ModalComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() routerLinkString: string;
  @Input() modalTitle: string;
  @Input() isLG: boolean = false;
  @Input() isXL: boolean = false;
  @Output() onCloseEvent: EventEmitter<Event> = new EventEmitter();
  constructor() {}
  ngOnInit() {}
}

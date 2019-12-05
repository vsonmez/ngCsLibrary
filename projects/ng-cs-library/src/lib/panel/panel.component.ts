import { Component, OnInit, Input } from "@angular/core";
import { T_PanelThemes } from "../../types";
import { E_Theme } from "../../theme.definitions";

@Component({
  selector: "cs-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.less"]
})
export class PanelComponent implements OnInit {
  @Input() panelTitle: string;
  @Input() canToggle: boolean;
  @Input() isExpanded: boolean;
  @Input() theme: T_PanelThemes = "default";
  cssClassHeader = {
    "text-white": false
  };
  cssClassFooter = {
    "text-white": false
  };
  borderColor: string;
  constructor() {}
  ngOnInit() {
	this.cssClassHeader["text-white"] = this.theme === E_Theme[this.theme];
	this.cssClassFooter["text-white"] = this.theme === E_Theme[this.theme];
    this.borderColor = this.theme === "default" ? null : `border-${this.theme}`;
  }
  handleToggleContent(): void {
    this.isExpanded = !this.isExpanded;
  }
}

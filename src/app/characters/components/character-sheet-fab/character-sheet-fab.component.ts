import { Component, ChangeDetectionStrategy } from "@angular/core";
import { speedDialFabAnimations } from "./character-sheet-fab.animation.component";

import * as jsPDF from "jspdf";
import * as html2pdf from "html2pdf.js";

@Component({
  selector: "app-character-sheet-fab",
  animations: speedDialFabAnimations,
  templateUrl: "./character-sheet-fab.component.html",
  styleUrls: ["./character-sheet-fab.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterSheetFabComponent {
  fabButtons = [
    {
      icon: "picture_as_pdf",
      tooltip: "Export as PDF",
      click: this.printSheet,
    },
  ];
  buttons = [];
  fabTogglerState = "inactive";

  constructor() {}

  showItems() {
    this.fabTogglerState = "active";
    this.buttons = this.fabButtons;
  }

  hideItems() {
    this.fabTogglerState = "inactive";
    this.buttons = [];
  }

  onToggleFab() {
    this.fabTogglerState === "active" ? this.hideItems() : this.showItems();
  }

  printSheet() {
    console.log("Trying to print");

    const element = document.getElementById("printable-character-sheet");
    const opt = {
      margin: 0,
      filename: "test.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 3, letterRendering: true, useCORS: true },
    };

    // element.style.visibility = "initial";
    const worker = html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then((done) => {
        console.log(element);
        // element.style.visibility = "hidden";
      });
    // .finally(() => ());
  }
}

import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { speedDialFabAnimations } from "./character-sheet-fab.animation.component";
import * as jsPDF from "jspdf";
import * as html2pdf from "html2pdf.js";
import { Characters } from "../../../../generated/graphql";

@Component({
  selector: "app-character-sheet-fab",
  animations: speedDialFabAnimations,
  templateUrl: "./character-sheet-fab.component.html",
  styleUrls: ["./character-sheet-fab.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterSheetFabComponent {
  @Input() selectedCharacter: Partial<Characters>;
  fabButtons = [
    {
      icon: "file_download",
      tooltip: "Export as JSON",
      click: this.exportAsJSON.bind(this),
    },
    // {
    //   icon: "picture_as_pdf",
    //   tooltip: "Export as PDF",
    //   click: this.printSheet,
    // },
  ];
  buttons = [];
  fabTogglerState = "inactive";

  constructor() {}

  showItems(): void {
    this.fabTogglerState = "active";
    this.buttons = this.fabButtons;
  }

  hideItems(): void {
    this.fabTogglerState = "inactive";
    this.buttons = [];
  }

  onToggleFab(): void {
    this.fabTogglerState === "active" ? this.hideItems() : this.showItems();
  }

  exportAsJSON(): void {
    const blob = new Blob([JSON.stringify(this.selectedCharacter)], {
      type: "application/json",
    });
    const url = window.URL.createObjectURL(blob);
    window.open(url);
  }

  printSheet(): void {
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

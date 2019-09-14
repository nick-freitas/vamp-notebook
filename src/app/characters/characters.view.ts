import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { StateService } from "../core/state.service";
import { PrintableCharacterSheetComponent } from "./components/printable-character-sheet/printable-character-sheet.component";
import { ComponentPortal } from "@angular/cdk/portal";

@Component({
  templateUrl: "./characters.view.html",
  styleUrls: ["./characters.view.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersView implements OnInit {
  public characterListOpened: boolean;
  constructor(public state: StateService) {}

  componentPortal: ComponentPortal<PrintableCharacterSheetComponent>;

  ngOnInit() {
    // Create a portalHost from a DOM element
    // const portalHost = new DomPortalOutlet(
    //   document.querySelector("#printableSpace"),
    //   this.componentFactoryResolver,
    //   this.appRef,
    //   this.injector
    // );
    // // Locate the component factory for the HeaderComponent
    // const portal = new ComponentPortal(PrintableCharacterSheetComponent);
    // // Attach portal to host
    // portalHost.attach(portal);
  }
}
import { Component, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { StateService } from "../../../core/state/state.service";

@Component({
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent {
  public characterListOpened: boolean;
  constructor(public state: StateService) {}

  // componentPortal: ComponentPortal<PrintableCharacterSheetComponent>;

  // ngOnInit() {
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
  // }
}

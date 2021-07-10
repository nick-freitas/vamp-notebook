import { Component, ChangeDetectionStrategy, Input } from "@angular/core";
import { Characters } from "../../../../generated/graphql";

@Component({
  selector: "app-character-portrait",
  templateUrl: "./character-portrait.component.html",
  styleUrls: ["./character-portrait.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterPortraitComponent {
  @Input() selectedCharacter: Partial<Characters>;
  constructor() {}
}

import {
  Component,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef,
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { SubSink } from "subsink";
import { CharacterService } from "../../character.service";
import _configJSON from "../../../../assets/config.json";
import _vtm20Data from "../../../core/vtm-20-data.json";
import { switchMap } from "rxjs/operators";
import { Characters } from "../../../../generated/graphql";
import { CharactersRoutingModule } from "../../characters-routing.module";

@Component({
  selector: "app-character-sheet",
  templateUrl: "./character-sheet.component.html",
  styleUrls: ["./character-sheet.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterSheetComponent implements OnDestroy {
  subs: SubSink;
  formGroup: FormGroup;
  isFormDirty: boolean;
  isGenerationDirty: boolean;
  isClanDirty: boolean;
  configJSON = _configJSON;

  generations = _vtm20Data._generations;
  clans = _vtm20Data._clans;
  archetypes = _vtm20Data._archetypes;
  physicalAttributes = _vtm20Data._physicalAttributes;

  constructor(
    public characterService: CharacterService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.subs = new SubSink();
    this.initFormGroup(null);
    this.resetFormGroup();
  }

  initFormGroup(character): void {
    this.formGroup = new FormGroup({
      name: new FormControl(character?.name),
      generation: new FormControl(character?.generation),
      clan: new FormControl(character?.clan),
      demeanor: new FormControl(character?.demeanor),
      nature: new FormControl(character?.nature),
      sire: new FormControl(character?.sire),
      // stats: new FormGroup({
      //   strength: new FormControl(character?.stats?.strength),
      // }),
    });
  }

  cancelChanges(): void {
    this.resetFormGroup();
  }

  saveChanges(characterId): void {
    const formGroupValues = this.formGroup.value;
    const _updateCharacters: Pick<typeof formGroupValues, keyof Characters> =
      formGroupValues;
    this.characterService
      .updateCharacter(characterId, _updateCharacters)
      .pipe(
        switchMap(() =>
          this.characterService.selectCharacterByCharacterId(characterId)
        )
      )
      .subscribe((character) => {
        this.initFormGroup(character);
        this.resetFormGroup();
        this.changeDetectorRef.markForCheck();
      });
  }

  resetFormGroup(): void {
    this.subs.unsubscribe();

    this.subs.sink = this.characterService.selectedCharacter$?.subscribe(
      (character) => {
        if (!character) {
          return;
        }

        this.isFormDirty = false;
        // this.isGenerationDirty = false;
        // this.isClanDirty = false;

        this.initFormGroup(character);

        this.subs.sink = this.formGroup.valueChanges.subscribe((_) => {
          this.isFormDirty = true;
        });

        // this.subs.sink = this.formGroup
        //   .get("generation")
        //   .valueChanges.subscribe((_) => (this.isGenerationDirty = true));

        // this.subs.sink = this.formGroup
        //   .get("clan")
        //   .valueChanges.subscribe((_) => (this.isClanDirty = true));
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}

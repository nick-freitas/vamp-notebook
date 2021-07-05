import { Component, ChangeDetectionStrategy, OnDestroy } from "@angular/core";
import { StateService } from "src/app/core/state.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ConfirmChangeComponent } from "../confirm-change.component";
import { MatDialog } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { SubSink } from "subsink";

const _generations = [
  { text: "Second Generation", value: 2 },
  { text: "Third Generation", value: 3 },
  { text: "Fourth Generation", value: 4 },
  { text: "Fifth Generation", value: 5 },
  { text: "Sixth Generation", value: 6 },
  { text: "Seventh Generation", value: 7 },
  { text: "Eigth Generation", value: 8 },
  { text: "Ninth Generation", value: 9 },
  { text: "Tenth Generation", value: 10 },
  { text: "Eleven Generation", value: 11 },
  { text: "Twelve Generation", value: 12 },
  { text: "Thirteenth Generation", value: 13 },
  { text: "Furteenth Generation", value: 14 },
  { text: "Fifteenth Generation", value: 15 },
  { text: "Sixteenth Generation", value: 16 }
];

const _clans = [
  { text: "Clan Assamite", value: "Clan Assamite" },
  { text: "Clan Brujah", value: "Clan Brujah" },
  { text: "Followers of Set", value: "Followers of Set" },
  { text: "Clan Gangrel", value: "Clan Gangrel" },
  { text: "Clan Giovanni", value: "Clan Giovanni" },
  { text: "Clan Lasombra", value: "Clan Lasombra" },
  { text: "Clan Malkavian", value: "Clan Malkavian" },
  { text: "Clan Nosferatu", value: "Clan Nosferatu" },
  { text: "Clan Ravnos", value: "Clan Ravnos" },
  { text: "Clan Toreador", value: "Clan Toreador" },
  { text: "Clan Tremere", value: "Clan Tremere" },
  { text: "Clan Tzimisce", value: "Clan Tzimisce" },
  { text: "Clan Ventrue", value: "Clan Ventrue" }
];

const _archetypes = [
  { text: "Addict", value: "Addict" },
  { text: "Adherent", value: "Adherent" },
  { text: "Adjudicator", value: "Adjudicator" },
  { text: "Alpha", value: "Alpha" },
  { text: "Architect", value: "Architect" },
  { text: "Artiste", value: "Artiste" },
  { text: "Autocrat", value: "Autocrat" },
  { text: "Barbarian", value: "Barbarian" },
  { text: "Benefactor", value: "Benefactor" },
  { text: "Beta", value: "Beta" },
  { text: "Bon Vivant", value: "Bon Vivant" },
  { text: "Bravo", value: "Bravo" },
  { text: "Capitalist", value: "Capitalist" },
  { text: "Caregiver", value: "Caregiver" },
  { text: "Caretaker", value: "Caretaker" },
  { text: "Celebrant", value: "Celebrant" },
  { text: "Chameleon", value: "Chameleon" },
  { text: "Child", value: "Child" },
  { text: "Competitor", value: "Competitor" },
  { text: "Conformist", value: "Conformist" },
  { text: "Conniver", value: "Conniver" },
  { text: "Coward", value: "Coward" },
  { text: "Creep Show", value: "Creep Show" },
  { text: "Crusader", value: "Crusader" },
  { text: "Curmudgeon", value: "Curmudgeon" },
  { text: "Dabbler", value: "Dabbler" },
  { text: "Defender", value: "Defender" },
  { text: "Deviant", value: "Deviant" },
  { text: "Devil’s Advocate", value: "Devil’s Advocate" },
  { text: "Director", value: "Director" },
  { text: "Enigma", value: "Enigma" },
  { text: "Explorer", value: "Explorer" },
  { text: "Eye of the Storm", value: "Eye of the Storm" },
  { text: "Fanatic", value: "Fanatic" },
  { text: "Fatalist", value: "Fatalist" },
  { text: "Futurist", value: "Futurist" },
  { text: "Gallant", value: "Gallant" },
  { text: "Gambler", value: "Gambler" },
  { text: "Guru", value: "Guru" },
  { text: "Heretic", value: "Heretic" },
  { text: "Hunter", value: "Hunter" },
  { text: "Idealist", value: "Idealist" },
  { text: "Judge", value: "Judge" },
  { text: "Loner", value: "Loner" },
  { text: "Machine", value: "Machine" },
  { text: "Maniac", value: "Maniac" },
  { text: "Martyr", value: "Martyr" },
  { text: "Masochist", value: "Masochist" },
  { text: "Meddler", value: "Meddler" },
  { text: "Melancholic", value: "Melancholic" },
  { text: "Monster", value: "Monster" },
  { text: "Omega", value: "Omega" },
  { text: "Outsider", value: "Outsider" },
  { text: "Paragon", value: "Paragon" },
  { text: "Pedagogue", value: "Pedagogue" },
  { text: "Penitent", value: "Penitent" },
  { text: "Perfectionist", value: "Perfectionist" },
  { text: "Quaestor", value: "Quaestor" },
  { text: "Rebel", value: "Rebel" },
  { text: "Rogue", value: "Rogue" },
  { text: "Sadist", value: "Sadist" },
  { text: "Scientist", value: "Scientist" },
  { text: "Seer", value: "Seer" },
  { text: "Sociopath", value: "Sociopath" },
  { text: "Soldier", value: "Soldier" },
  { text: "Stoic", value: "Stoic" },
  { text: "Survivor", value: "Survivor" },
  { text: "Thrill-Seeker", value: "Thrill-Seeker" },
  { text: "Traditionalist", value: "Traditionalist" },
  { text: "Trickster", value: "Trickster" },
  { text: "Tycoon", value: "Tycoon" },
  { text: "Vigilante", value: "Vigilante" },
  { text: "Visionary", value: "Visionary" }
];

@Component({
  selector: "app-character-sheet",
  templateUrl: "./character-sheet.component.html",
  styleUrls: ["./character-sheet.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterSheetComponent implements OnDestroy {
  subs: SubSink;
  formGroup: FormGroup;
  isFormDirty: boolean;
  isGenerationDirty: boolean;
  isClanDirty: boolean;
  selectedCharacterSub: Subscription;

  generations = _generations;
  clans = _clans;
  archetypes = _archetypes;

  physicalAttributes: {name: string, text: string}[];

  constructor(public state: StateService, public dialog: MatDialog) {
    this.subs = new SubSink();
    this.resetFormGroup();

    this.physicalAttributes = [
      { name: "strength", text: "Strength" },
      { name: "dexterity", text: "Dexterity" },
      { name: "stamina", text: "Stamina" }
    ];
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  cancelChanges() {
    this.resetFormGroup();
  }

  saveChanges() {
    this.state.updateCharacterSheet(this.formGroup.value);
  }

  resetFormGroup() {
    this.subs.unsubscribe();

    this.subs.sink = this.state.selectedCharacter$.subscribe(character => {
      this.isFormDirty = false;
      this.isGenerationDirty = false;
      this.isClanDirty = false;

      this.formGroup = new FormGroup({
        name: new FormControl(character.name),
        generation: new FormControl(character.generation),
        clan: new FormControl(character.clan),
        demeanor: new FormControl(character.demeanor),
        nature: new FormControl(character.nature),
        sire: new FormControl(character.sire),
        stats: new FormGroup({
          strength: new FormControl(character.stats.strength)
        })
      });

      this.subs.sink = this.formGroup.valueChanges.subscribe(_ => {
        this.isFormDirty = true;
      });

      this.subs.sink = this.formGroup
        .get("generation")
        .valueChanges.subscribe(_ => (this.isGenerationDirty = true));

      this.subs.sink = this.formGroup
        .get("clan")
        .valueChanges.subscribe(_ => (this.isClanDirty = true));
    });
  }
}

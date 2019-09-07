import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Subject, BehaviorSubject } from "rxjs";
import { map, filter } from "rxjs/operators";
import * as StateTypes from "./state.types";
import stateJSON from "../../assets/initial-state.json";

const initialState: StateTypes.TopLevel = stateJSON;

@Injectable({
  providedIn: "root"
})
export class StateService {
  readonly characterSheetFields$: Subject<StateTypes.CharacterSheetFields>;
  readonly chronicleList$: Subject<StateTypes.Chronicle[]>;
  readonly selectedChronicle$: Subject<StateTypes.Chronicle>;
  readonly selectedCharacter$: Subject<StateTypes.Character>;
  readonly selectedNote$: Subject<StateTypes.Note>;
  readonly selectedRouteIsUserPage$: Subject<boolean>;
  readonly selectedRouteIsCharactersPage$: Subject<boolean>;
  readonly isCharacterListSidenavOpen$: Subject<boolean>;
  readonly isNoteListSidenavOpen$: Subject<boolean>;
  readonly isMobile$: Subject<boolean>;

  private user: StateTypes.User;
  private selectedChronicle: StateTypes.Chronicle;
  private selectedCharacter: StateTypes.Character;
  private selectedNote: StateTypes.Note;
  private isCharacterListSidenavOpen: boolean;
  private isNoteListSidenavOpen: boolean;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.characterSheetFields$ = new BehaviorSubject(null);
    this.chronicleList$ = new BehaviorSubject(null);
    this.selectedChronicle$ = new BehaviorSubject(null);
    this.selectedCharacter$ = new BehaviorSubject(null);
    this.selectedNote$ = new BehaviorSubject(null);

    this.selectedRouteIsUserPage$ = new BehaviorSubject(null);
    this.selectedRouteIsCharactersPage$ = new BehaviorSubject(null);

    this.isCharacterListSidenavOpen$ = new BehaviorSubject(null);
    this.isNoteListSidenavOpen$ = new BehaviorSubject(null);
    this.isMobile$ = new BehaviorSubject(null);

    this.user = initialState.users[0];

    this.initializeSubscriptions();
  }

  private initializeSubscriptions() {
    this.characterSheetFields$.next(initialState.characterSheetFields);

    // * chronicleList$
    this.chronicleList$.next(this.user.chronicles);

    // * selectedChronicle$
    this.chronicleList$.subscribe((chronicleList: StateTypes.Chronicle[]) => {
      if (!chronicleList) {
        return;
      }

      this.selectedChronicle = chronicleList[0];
      const lastSelectedChronicle = chronicleList.find(
        chornicle => chornicle.id === this.user.lastSelectedChronicle
      );

      if (lastSelectedChronicle) {
        this.selectedChronicle = lastSelectedChronicle;
      }

      this.selectedChronicle$.next(this.selectedChronicle);
    });

    // * selectedCharacter$
    this.selectedChronicle$.subscribe((chronicle: StateTypes.Chronicle) => {
      if (!chronicle) {
        return;
      }

      const clanList = chronicle.clans;

      this.selectedCharacter = clanList[0].characters[0];
      let lastSelectedCharacter = null;

      clanList.some(
        clan =>
          !!(lastSelectedCharacter = clan.characters.find(
            character => character.id === chronicle.lastSelectedCharacter
          ))
      );

      if (lastSelectedCharacter) {
        this.selectedCharacter = lastSelectedCharacter;
      }

      this.selectedCharacter$.next(this.selectedCharacter);
    });

    // * selectedNote$
    this.selectedCharacter$.subscribe((character: StateTypes.Character) => {
      if (!character) {
        return;
      }

      const noteList = character.notes;

      this.selectedNote = null; // if none is last selected, leave blank for stats
      const lastSelectedNote = noteList.find(
        note => note.id === this.selectedCharacter.lastSelectedNote
      );

      if (lastSelectedNote) {
        this.selectedNote = lastSelectedNote;
      }

      this.selectedNote$.next(this.selectedNote);
    });

    // * router
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map((navEvent: NavigationEnd) => navEvent.urlAfterRedirects)
      )
      .subscribe(url => {
        // reset everything first
        this.selectedRouteIsCharactersPage$.next(false);
        this.selectedRouteIsUserPage$.next(false);

        // then set
        switch (url) {
          case "/users":
            this.selectedRouteIsUserPage$.next(true);
            break;
          case "/characters":
            this.selectedRouteIsCharactersPage$.next(true);
            break;
          default:
            break;
        }
      });

    // * is mobile
    this.breakpointObserver
      .observe(["(min-width: 840px)"])
      .pipe(map(result => result.matches))
      .subscribe(isDesktop => {
        this.isCharacterListSidenavOpen = isDesktop;
        this.isNoteListSidenavOpen = isDesktop;

        this.isCharacterListSidenavOpen$.next(this.isCharacterListSidenavOpen);
        this.isNoteListSidenavOpen$.next(this.isNoteListSidenavOpen);

        this.isMobile$.next(!isDesktop);
      });
  }

  updateUserState() {
    // * Notes
    if (this.selectedNote) {
      this.selectedCharacter.notes = this.selectedCharacter.notes.map(
        charNote =>
          charNote.id === this.selectedNote.id ? this.selectedNote : charNote
      );
    }

    this.selectedCharacter.lastSelectedNote =
      this.selectedNote && this.selectedNote.id;

    // * Characters
    this.selectedChronicle.clans = this.selectedChronicle.clans.map(clan =>
      Object.assign({}, clan, {
        characters: clan.characters.map(character =>
          character.id === this.selectedCharacter.id
            ? this.selectedCharacter
            : character
        )
      })
    );

    this.selectedChronicle.lastSelectedCharacter = this.selectedCharacter.id;

    // * Chronicles
    this.user = Object.assign({}, this.user, {
      chronicles: this.user.chronicles.map(chronicle =>
        chronicle.id === this.selectedChronicle.id
          ? this.selectedChronicle
          : chronicle
      )
    });

    this.user.lastSelectedChronicle = this.selectedChronicle.id;

    // push changes out
    this.selectedNote$.next(this.selectedNote);
    this.selectedCharacter$.next(this.selectedCharacter);
    this.selectedChronicle$.next(this.selectedChronicle);
  }

  changeSelectedNote(note: StateTypes.Note) {
    this.selectedNote = note;
    this.updateUserState();
  }

  changeSelectedCharacter(character: StateTypes.Character) {
    this.selectedCharacter = character;
    this.updateUserState();
  }

  changeSelectedChronicle(chronicle: StateTypes.Chronicle) {
    this.selectedChronicle = chronicle;
    this.updateUserState();
  }

  changeCharacterStats(characterStats) {
    this.changeSelectedCharacter(
      Object.assign({}, this.selectedCharacter, characterStats)
    );
  }

  changeNoteFields(noteFields) {
    this.changeSelectedNote(Object.assign({}, this.selectedNote, noteFields));
  }

  openCharacterListSidenav() {
    this.isCharacterListSidenavOpen = true;
    this.isCharacterListSidenavOpen$.next(this.isCharacterListSidenavOpen);
  }

  closeCharacterListSidenav() {
    this.isCharacterListSidenavOpen = false;
    this.isCharacterListSidenavOpen$.next(this.isCharacterListSidenavOpen);
  }

  toggleCharacterListSidenav() {
    this.isCharacterListSidenavOpen = !this.isCharacterListSidenavOpen;
    this.isCharacterListSidenavOpen$.next(this.isCharacterListSidenavOpen);
  }

  openNoteListSidenav() {
    this.isNoteListSidenavOpen = true;
    this.isNoteListSidenavOpen$.next(this.isNoteListSidenavOpen);
  }

  closeNoteListSidenav() {
    this.isNoteListSidenavOpen = false;
    this.isNoteListSidenavOpen$.next(this.isNoteListSidenavOpen);
  }

  toggleNoteListSidenav() {
    this.isNoteListSidenavOpen = !this.isNoteListSidenavOpen;
    this.isNoteListSidenavOpen$.next(this.isNoteListSidenavOpen);
  }
}

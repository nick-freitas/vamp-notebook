import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Subject, BehaviorSubject } from "rxjs";
import { map, filter } from "rxjs/operators";
import * as StateTypes from "./state.types";
import stateJSON from "../assets/initial-state.json";

const initialState: StateTypes.TopLevel = stateJSON;

@Injectable({
  providedIn: "root"
})
export class StateService {
  readonly chronicleList$: Subject<StateTypes.Chronicle[]>;
  readonly selectedChronicle$: Subject<StateTypes.Chronicle>;
  readonly selectedCharacter$: Subject<StateTypes.Character>;
  readonly selectedNote$: Subject<StateTypes.Note>;
  readonly selectedRouteIsUserPage$: Subject<boolean>;
  readonly selectedRouteIsCharactersPage$: Subject<boolean>;
  readonly isCharacterListSidenavOpen$: Subject<boolean>;
  readonly isNoteListSidenavOpen$: Subject<boolean>;

  private user: StateTypes.User;
  private selectedChronicle: StateTypes.Chronicle;
  private selectedCharacter: StateTypes.Character;
  private selectedNote: StateTypes.Note;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.chronicleList$ = new BehaviorSubject(null);
    this.selectedChronicle$ = new BehaviorSubject(null);
    this.selectedCharacter$ = new BehaviorSubject(null);
    this.selectedNote$ = new BehaviorSubject(null);

    this.selectedRouteIsUserPage$ = new BehaviorSubject(null);
    this.selectedRouteIsCharactersPage$ = new BehaviorSubject(null);

    this.isCharacterListSidenavOpen$ = new BehaviorSubject(null);
    this.isNoteListSidenavOpen$ = new BehaviorSubject(null);

    this.user = initialState.users[0];

    this.initializeSubscriptions();
  }

  private initializeSubscriptions() {
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

    // todo: add check if mobile auto-close sidenav, reopen on not mobile
    this.isCharacterListSidenavOpen$.next(true);
    this.isNoteListSidenavOpen$.next(true);
  }

  changeSelectedNote(note: StateTypes.Note) {
    this.selectedNote$.next(note);
    this.selectedCharacter.lastSelectedNote = note.id;
  }

  changeSelectedCharacter(character: StateTypes.Character) {
    this.selectedCharacter$.next(character);
    this.selectedChronicle.lastSelectedCharacter = character.id;
  }

  changeSelectedChronicle(chronicle: StateTypes.Chronicle) {
    this.selectedChronicle$.next(chronicle);
    this.user.lastSelectedChronicle = chronicle.id;
  }

  closeCharacterListSidenav() {
    this.isCharacterListSidenavOpen$.next(false);
  }

  openCharacterListSidenav() {
    this.isCharacterListSidenavOpen$.next(true);
  }

  closeNoteListSidenav() {
    this.isNoteListSidenavOpen$.next(false);
  }

  openNoteSidenav() {
    this.isNoteListSidenavOpen$.next(true);
  }
}

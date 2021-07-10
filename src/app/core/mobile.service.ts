import { BreakpointObserver } from "@angular/cdk/layout";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MobileService {
  readonly isCharacterListSidenavOpen$: Subject<boolean>;
  readonly isNoteListSidenavOpen$: Subject<boolean>;
  readonly isMobile$: Subject<boolean>;

  private isCharacterListSidenavOpen: boolean;
  private isNoteListSidenavOpen: boolean;
  private isMobile: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isCharacterListSidenavOpen$ = new BehaviorSubject(null);
    this.isNoteListSidenavOpen$ = new BehaviorSubject(null);
    this.isMobile$ = new BehaviorSubject(null);

    this.initializeSubscriptions();
  }

  private initializeSubscriptions(): void {
    // * is mobile
    this.breakpointObserver
      .observe(["(min-width: 840px)"])
      .pipe(map((result) => result.matches))
      .subscribe((isDesktop) => {
        this.isCharacterListSidenavOpen = isDesktop;
        this.isNoteListSidenavOpen = isDesktop;

        this.isCharacterListSidenavOpen$.next(this.isCharacterListSidenavOpen);
        this.isNoteListSidenavOpen$.next(this.isNoteListSidenavOpen);

        this.isMobile = !isDesktop;

        this.isMobile$.next(this.isMobile);
      });
  }

  openCharacterListSidenav(): void {
    this.isCharacterListSidenavOpen = true;
    this.isCharacterListSidenavOpen$.next(this.isCharacterListSidenavOpen);
  }

  closeCharacterListSidenav(mobileOnly: boolean = false): void {
    if (mobileOnly && this.isMobile && this.isCharacterListSidenavOpen) {
      this.isCharacterListSidenavOpen = false;
    }

    this.isCharacterListSidenavOpen$.next(this.isCharacterListSidenavOpen);
  }

  toggleCharacterListSidenav(): void {
    this.isCharacterListSidenavOpen = !this.isCharacterListSidenavOpen;
    this.isCharacterListSidenavOpen$.next(this.isCharacterListSidenavOpen);
  }

  openNoteListSidenav(): void {
    this.isNoteListSidenavOpen = true;
    this.isNoteListSidenavOpen$.next(this.isNoteListSidenavOpen);
  }

  closeNoteListSidenav(mobileOnly: boolean = false): void {
    if (mobileOnly && this.isMobile && this.isNoteListSidenavOpen) {
      this.isNoteListSidenavOpen = false;
    }

    this.isNoteListSidenavOpen$.next(this.isNoteListSidenavOpen);
  }

  toggleNoteListSidenav(): void {
    this.isNoteListSidenavOpen = !this.isNoteListSidenavOpen;
    this.isNoteListSidenavOpen$.next(this.isNoteListSidenavOpen);
  }
}

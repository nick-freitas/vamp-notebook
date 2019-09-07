import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutModule } from "@angular/cdk/layout";
import { CdkTreeModule } from "@angular/cdk/tree";
import { OverlayModule } from "@angular/cdk/overlay";
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatTooltipModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatToolbarModule,
  MatCardModule,
  MatDividerModule,
  MatCheckboxModule
} from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // cdk
    LayoutModule,
    CdkTreeModule,
    OverlayModule,
    // material
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule
  ],
  exports: [
    // cdk
    LayoutModule,
    CdkTreeModule,
    OverlayModule,
    // material
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTooltipModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    MatCheckboxModule
  ]
})
export class CommonMaterialModule {}

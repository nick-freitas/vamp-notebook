import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, MatToolbarModule],
  exports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule, MatToolbarModule]
})
export class NgMaterial {}

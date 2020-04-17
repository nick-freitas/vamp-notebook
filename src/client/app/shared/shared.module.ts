import { NgModule } from '@angular/core';
import { PointsPipe } from './points.pipe';
import { SpinnerComponent } from './spinner.component';
import { ArrayCostPipe } from './array-cost.pipe';

@NgModule({
  declarations: [PointsPipe, ArrayCostPipe, SpinnerComponent],
  exports: [PointsPipe, ArrayCostPipe, SpinnerComponent]
})
export class SharedModule {}

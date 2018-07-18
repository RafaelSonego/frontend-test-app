import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TootipComponent } from './components/tootip/tootip.component';
import { AppPositionTooltipDirective } from './directives/tooltip.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    TootipComponent,
    AppPositionTooltipDirective
  ],
  providers: [],
  exports: [TootipComponent]
})
export class SharedModule { }

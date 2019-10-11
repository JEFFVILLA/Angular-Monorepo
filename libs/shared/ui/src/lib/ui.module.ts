import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeetingsComponent } from './greeetings/greeetings.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GreeetingsComponent],
  exports: [GreeetingsComponent]
})
export class UiModule {}

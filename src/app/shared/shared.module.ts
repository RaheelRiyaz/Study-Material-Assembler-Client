import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './pages/spinner/spinner.component';

@NgModule({
  declarations: [],
  imports: [CommonModule,SpinnerComponent],
  exports: [SpinnerComponent],
})
export class SharedModule {}

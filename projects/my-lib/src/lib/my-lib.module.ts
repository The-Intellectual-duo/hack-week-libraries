import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { UpDownCounterComponent } from './up-down-counter/up-down-counter.component';



@NgModule({
  declarations: [
    MyLibComponent,
    UpDownCounterComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    UpDownCounterComponent
  ]
})
export class MyLibModule { }

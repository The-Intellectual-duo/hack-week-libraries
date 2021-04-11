import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { UpDownCounterComponent } from './up-down-counter/up-down-counter.component';
import { ItemComponent } from './item/item.component';
import { ItemsContainerComponent } from './items-container/items-container.component';



@NgModule({
  declarations: [
    MyLibComponent,
    UpDownCounterComponent,
    ItemComponent,
    ItemsContainerComponent
  ],
  imports: [
  ],
  exports: [
    MyLibComponent,
    UpDownCounterComponent,
    ItemComponent,
    ItemsContainerComponent
  ]
})
export class MyLibModule { }

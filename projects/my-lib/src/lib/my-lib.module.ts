import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { UpDownCounterComponent } from './up-down-counter/up-down-counter.component';
import { ItemComponent } from './item/item.component';
import { ItemsContainerComponent } from './items-container/items-container.component';
import { CommonModule } from '@angular/common';
import { WatchesComponent } from './watches/watches.component';



@NgModule({
  declarations: [
    MyLibComponent,
    UpDownCounterComponent,
    ItemComponent,
    ItemsContainerComponent,
    WatchesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyLibComponent,
    UpDownCounterComponent,
    ItemComponent,
    ItemsContainerComponent,
    WatchesComponent
  ]
})
export class MyLibModule { }

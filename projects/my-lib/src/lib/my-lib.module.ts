import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ItemComponent } from './item/item.component';
import { ItemsContainerComponent } from './items-container/items-container.component';
import {CommonModule} from '@angular/common'



@NgModule({
  declarations: [
    MyLibComponent,
    ItemComponent,
    ItemsContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyLibComponent,
    ItemComponent,
    ItemsContainerComponent
  ]
})
export class MyLibModule { }

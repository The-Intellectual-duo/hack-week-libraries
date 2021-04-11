import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-up-down-counter',
  templateUrl: './up-down-counter.component.html',
  styleUrls: ['./up-down-counter.component.css']
})
export class UpDownCounterComponent implements OnInit {

  @Input() value = 1;

  count = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCount() {
    this.count += this.value;
  }

  decrementCount() {
    this.count -= this.value;
  }

}

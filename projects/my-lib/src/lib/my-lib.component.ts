import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  //templateUrls
  template: `
    <p>
      Hello guys
    </p>
  `,
  //stylesYrls
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

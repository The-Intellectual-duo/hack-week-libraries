import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-watches',
  templateUrl: './watches.component.html',
  styleUrls: ['./watches.component.css']
})
export class WatchesComponent implements OnInit {

  @Input() watches = [
    {
      img: 'https://i5.walmartimages.com/asr/5a94b5e9-178b-4b6f-9078-a59348135a14.bc06f61adfe49c84a56cc2876d8913da.png?odnWidth=300&odnHeight=300&odnBg=ffffff',
      type: 'Mens Silver Big Rocks with Roman Numerals and Red Face',
      price: 250000,
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThTIkNim_GO1o32s4fYlUwCK8137dEC0kEAQ&usqp=CAU',
      type: 'Fully Iced Out with Black Diamonds, Stainless Steel',
      price: 80000
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSioh9LPP7vSTeTn3-2VAiggZGxm00yy977qCVPkA4AH2Zb5bK41FOszPmIUlmeCZmBra7r22A&usqp=CAc',
      type: 'Fully Iced Out Two Tone with White & Gold Diamonds with Custom Blue Roman Numerial Dial',
      price: 200000
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwT54iIxZr8wbn0lQ4baVnIbo76OGBGujNLIxGMt9fQFE6T3I4RBfVE49wM9DvQg-PrOfw8Vq&usqp=CAc',
      type: 'Fully Iced Out with White Diamonds and Custom Green Roman Numeral Dial',
      price: 300000
    }
    
  ]


  constructor() { }

  ngOnInit(): void {
  }

}

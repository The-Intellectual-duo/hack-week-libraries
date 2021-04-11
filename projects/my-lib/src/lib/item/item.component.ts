import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  //all values are default for now but can be changed by passing as attribute 
  //example in items-container.html
  
  //stock Image
  @Input() imgSrc: string = "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
  //Name of shoe
  @Input() title: string = 'Red Smoke 11s'
  //Shoe type
  @Input() type: string = 'Men\'s Shoe'
  

  //if Shoe has a special feature, set special to true
  @Input() special:boolean = false;
  //then enter shoe's special feature with special feature
  @Input() specialDesc: string = 'Sustainable Material';

  //Currency Type
  @Input() currency:string = '$'
  //Price amt
  @Input() price:string = '150'

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input } from '@angular/core';


@Component({
  selector: 'items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})


export class ItemsContainerComponent {
  @Input() itemArr= [
    {
    imgSrc:'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Breds 11',
      type: 'Men\s shoes',
      currency:'$',
      price: 250000
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Red Smoke 11',
      type: 'Women\s shoes',
      currency:'¥',
      price: 250000
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Breds 11',
      type: 'Men\s shoes',
      currency:'$',
      price: 250
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Red Smoke 11',
      type: 'Women\s shoes',
      currency:'¥',
      price: 250000
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Breds 11',
      type: 'Men\s shoes',
      currency:'$',
      price: 250
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Red Smoke 11',
      type: 'Women\s shoes',
      currency:'¥',
      price: 250000
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Breds 11',
      type: 'Men\s shoes',
      currency:'$',
      price: 250
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Red Smoke 11',
      type: 'Women\s shoes',
      currency:'¥',
      price: 250000
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Breds 11',
      type: 'Men\s shoes',
      currency:'$',
      price: 250
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Red Smoke 11',
      type: 'Women\s shoes',
      currency:'¥',
      price: 250000
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Breds 11',
      type: 'Men\s shoes',
      currency:'$',
      price: 250
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Red Smoke 11',
      type: 'Women\s shoes',
      currency:'¥',
      price: 250000
    },{
    imgSrc:'https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Breds 11',
      type: 'Men\s shoes',
      currency:'$',
      price: 250
    },
    {
    imgSrc:'https://images.pexels.com/photos/2529146/pexels-photo-2529146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title:'Red Smoke 11',
      type: 'Women\s shoes',
      currency:'¥',
      price: 250000
    }
  ];

  constructor(){

  }


}

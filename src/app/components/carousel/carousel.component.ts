import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  images = [
    {picture: 'https://picsum.photos/id/944/300/150'},
    {picture: 'https://picsum.photos/id/1011/300/150'},
    {picture: 'https://picsum.photos/id/984/300/150'},
    {picture: 'https://picsum.photos/id/944/300/150'},
    {picture: 'https://picsum.photos/id/1011/300/150'},
    {picture: 'https://picsum.photos/id/984/300/150'},
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

}

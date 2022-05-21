import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.less']
})
export class CarouselComponent implements OnInit {
  icons = ['circle_notifications', 'person_add', 'drafts', 'favorite', 'map', 'explore', 'schedule', 'location_on']

  images = [
    {picture: 'https://picsum.photos/id/1016/400/200'},
    {picture: 'https://picsum.photos/id/1015/400/200'},
    {picture: 'https://picsum.photos/id/1018/400/200'},
    {picture: 'https://picsum.photos/id/944/400/200'},
    {picture: 'https://picsum.photos/id/1011/400/200'},
    {picture: 'https://picsum.photos/id/984/400/200'}
  ];

  constructor() {

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.less']
})
export class HomeViewComponent implements OnInit {
  sendMessage(message: any) {
    console.log('New message', message);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {Position} from '../../directives/colored-border.directive';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.less']
})
export class HomeViewComponent implements OnInit {
  top = Position.top;
  bottom = Position.bottom;

  sendMessage(message: any) {
    console.log('New message', message);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

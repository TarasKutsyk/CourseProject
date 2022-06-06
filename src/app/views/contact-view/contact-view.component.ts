import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Position} from '../../directives/colored-border.directive';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.less']
})
export class ContactViewComponent implements OnInit {
  top = Position.top;
  bottom = Position.bottom;

  sendMessage(message: any) {
    console.log('New message', message);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

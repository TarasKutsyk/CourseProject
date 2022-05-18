import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.less']
})
export class ContactViewComponent implements OnInit {
  sendMessage(message: any) {
    console.log('New message', message);
  }

  constructor() { }

  ngOnInit(): void {
  }

}

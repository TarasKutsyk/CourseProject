import {Component, Input, OnInit} from '@angular/core';

import {Contact} from '../../../models/Contact';
import {ChatService} from "../../../services/chat.service";
import {ChatUser} from "../../../models/ChatUser";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
  @Input()
  contact!: Contact;

  activateUser() {
    this.chatService.changeActiveUser(this.contact.name);
  }

  constructor(private chatService: ChatService) {
    chatService.activeUser.subscribe((user: ChatUser) => {
      this.contact.active = user.name === this.contact.name;
    })
  }

  ngOnInit(): void {
  }
}

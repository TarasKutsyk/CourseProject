import { Component, OnInit } from '@angular/core';
import {ChatService} from "../../../services/chat.service";
import {Contact} from "../../../models/Contact";
import {ChatUser} from "../../../models/ChatUser";
import {ScrollPanel} from "primeng/scrollpanel";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less']
})
export class ChatComponent implements OnInit {
  activeUser !: ChatUser;
  messageInput: string = '';

  constructor(private chatService: ChatService) {
    chatService.activeUserSubject.subscribe((currentUser: ChatUser) => {
      this.activeUser = currentUser;
    });
  }

  sendMessage(scrollPanel: Element) {
    if(this.messageInput) {
      this.activeUser.messagesSent.push(this.messageInput);
    }
    this.messageInput = '';

    setTimeout(() => {
      scrollPanel.scroll({
        top: Number.MAX_SAFE_INTEGER,
        left: 0,
        behavior: 'smooth'
      })}, 0);
  }

  ngOnInit(): void {
  }
}

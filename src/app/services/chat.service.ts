import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

import {ContactsService} from "./contacts.service";
import {Contact} from "../models/Contact";
import {ChatUser} from "../models/ChatUser";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatUsers: ChatUser[] = [];
  activeUserSubject = new Subject<ChatUser>();
  activeUser = this.activeUserSubject.asObservable();

  contactsToMessages = (contacts: Contact[]) => {
    this.chatUsers = contacts.map(contact => {
      return {
        name: contact.name,
        active: contact.active,
        messages: []
      }
    });

    const currentActiveUser = this.chatUsers.find(user => user.active) as ChatUser;
    this.activeUserSubject.next(currentActiveUser);
  }

  constructor(private contactsService: ContactsService) {
    contactsService.contactsData.subscribe(this.contactsToMessages);
    contactsService.getContacts();
  }

  changeActiveUser(newActiveUserName: string) {
    const oldActiveUser = this.chatUsers.find(user => user.active) as ChatUser;
    oldActiveUser.active = false;

    const newActiveUser = this.chatUsers.find(user => user.name === newActiveUserName) as ChatUser;
    newActiveUser.active = true;
    this.activeUserSubject.next(newActiveUser);

    console.log(newActiveUser);
  }
}

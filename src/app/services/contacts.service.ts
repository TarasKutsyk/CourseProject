import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

import {Contact} from '../models/Contact';
import contacts from '../../data/contacts.json';
import {ChatUser} from "../models/ChatUser";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contactsSubject = new Subject<Contact[]>();
  contactsData = this.contactsSubject.asObservable();

  getContacts() {
    this.contactsSubject.next(contacts);
  }

  constructor() {

  }
}

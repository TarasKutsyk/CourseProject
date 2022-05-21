import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../models/Contact';
import {ContactsService} from "../../../services/contacts.service";
import contacts from "../../../../data/contacts.json";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {
  contacts!: Contact[];

  constructor(private contactsService: ContactsService) {
    contactsService.contactsData.subscribe((data: Contact[]) => {
      this.contacts = data
    });
  }

  ngOnInit(): void {
    this.contactsService.getContacts();
  }

}

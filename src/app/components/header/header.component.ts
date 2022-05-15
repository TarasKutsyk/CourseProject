import { Component, OnInit } from '@angular/core';

type LinksIconMap = {[key: string]: string};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  links = ['', 'Settings', 'Calendar', 'Message'];
  icons = ['palette', 'settings', 'calendar_month', 'sms'];
  iconWithBadge = this.icons[3];

  linksIconMap: LinksIconMap = {};

  constructor() {
    for(let i = 0; i < this.links.length; i++) {
      this.linksIconMap[this.links[i]] = this.icons[i];
    }
  }

  ngOnInit(): void {
  }
}

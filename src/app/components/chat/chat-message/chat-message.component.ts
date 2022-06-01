import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.less']
})
export class ChatMessageComponent implements OnInit {
  @Input()
  message !: string;
  @Input()
  isUserMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

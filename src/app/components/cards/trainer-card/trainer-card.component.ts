import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-card',
  templateUrl: './trainer-card.component.html',
  styleUrls: ['./trainer-card.component.less']
})
export class TrainerCardComponent implements OnInit {
  trainerRating: number = 4;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {ChartService} from "../../services/chart.service";

export interface User {
  name: string,
  password: string
}

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {
  progressValue: number = 20;
  progressStatus = 'Downloading';

  icons = [
    {
      icon: 'fa-facebook',
      link: 'https://www.facebook.com/'
    },
    {
      icon: 'fa-google',
      link: 'https://www.google.com/'
    },
    {
      icon: 'fa-twitter',
      link: 'https://www.twitter.com/'
    },
    {
      icon: 'fa-telegram',
      link: 'https://www.telegram.org/'
    },
    {
      icon: 'fa-envelope',
      link: 'https://www.gmail.com/'
    },
  ]
  iconsSubscripts = ['227K', '153K', '76K', '21K', '69K']

  constructor(private chartService: ChartService) {
    chartService.startLoading();
    chartService.currentProgress.subscribe(currentProgress => {
      this.progressValue = currentProgress;
      if (this.progressValue == 100) {
        this.progressStatus = 'Downloaded';
      }
    })
  }

  submitUser(user: User) {
    console.log('User signed in: ', user);
  }

  ngOnInit() {
  }
}

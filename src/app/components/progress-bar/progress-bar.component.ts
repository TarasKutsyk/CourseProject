import { Component, OnInit } from '@angular/core';
import {ChartService} from "../../services/chart.service";
import {NgForm} from "@angular/forms";

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

  userData: User = {
    name: '',
    password: ''
  }

  constructor(private chartService: ChartService) {
    chartService.startLoading();
    chartService.currentProgress.subscribe(currentProgress => {
      this.progressValue = currentProgress;
      if (this.progressValue == 100) {
        this.progressStatus = 'Downloaded';
      }
    })
  }

  submitUser(form: NgForm) {
    form.resetForm();
  }

  ngOnInit() {
  }
}

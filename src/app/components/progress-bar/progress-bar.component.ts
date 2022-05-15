import { Component, OnInit } from '@angular/core';
import {ChartService} from "../../services/chart.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnInit {
  progressValue: number = 20;
  progressStatus = 'Downloading';

  constructor(private chartService: ChartService) {
    chartService.startLoading();
    chartService.currentProgress.subscribe(currentProgress => {
      this.progressValue = currentProgress;
      if (this.progressValue == 100) {
        this.progressStatus = 'Downloaded';
      }
    })
  }

  ngOnInit() {
  }
}

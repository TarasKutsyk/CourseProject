import { Component, OnInit } from '@angular/core';
import {ChartService} from "../../services/chart.service";
import {ChartData} from "../../models/Chart"

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit {
  progress = 0;
  data?: ChartData;

  constructor(private chartService: ChartService) {
    this.chartService.currentProgress.subscribe(progress => this.progress = progress)

    chartService.chartData.subscribe(data => {
      this.data = data;
    })
  }

  ngOnInit(): void {
  }
}

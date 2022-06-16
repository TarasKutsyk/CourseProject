import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ChartService} from "../../services/chart.service";
import {ChartData} from "../../models/Chart"
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.less']
})
export class ChartComponent implements OnInit, AfterViewInit {
  currentBtnId = 'D-button';
  progress = 0;
  data?: ChartData;
  options?: any;

  constructor(private chartService: ChartService) {
    this.chartService.currentProgress.subscribe(progress => this.progress = progress);

    chartService.chartData.subscribe(data => {
      this.data = data;
      this.options = {
        scales: {
          x: {
            display: false
          },
          y: {
            ticks: {
              callback: () => ''
            }
          },
        }
      };
    });
  }

  setActiveButton(btnId: string) {
    const newActiveButton = document.getElementById(btnId) as HTMLElement;
    newActiveButton.style.backgroundColor = '#FF5722';
    newActiveButton.style.color = 'white';
  }

  togglePeriod(e: MatButtonToggleChange) {
    const oldActiveButton = document.getElementById(this.currentBtnId) as HTMLElement;
    oldActiveButton.style.backgroundColor = '';
    oldActiveButton.style.color = 'gray';

    const newButtonId = e.source.buttonId;
    this.setActiveButton(newButtonId);

    this.currentBtnId = newButtonId;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.setActiveButton(this.currentBtnId);
  }
}

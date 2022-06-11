import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ChartData} from '../models/Chart'
import data from '../../data/chart.json'

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private progressSubject = new Subject<number>();
  currentProgress = this.progressSubject.asObservable();

  private dataSubject = new Subject<ChartData>();
  chartData = this.dataSubject.asObservable();

  startingProgress = 50;

  constructor() { }

  loadData() {
    this.dataSubject.next(data);
  }

  async startLoading() {
    for (let currentProgress = this.startingProgress; currentProgress < 100;) {
      currentProgress = await this.increaseProgress(currentProgress);
      this.progressSubject.next(currentProgress);
    }
    await this.loadData();
  }

  increaseProgress(currentProgress: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(currentProgress + 1);
      }, 50);
    });
  }
}

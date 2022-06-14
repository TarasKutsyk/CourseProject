import {Component, OnDestroy, OnInit} from '@angular/core';

import playerSong from '../../../assets/data/player_song.json';
import {PlayerSong} from "../../models/PlayerSong";
import {Position} from "../../directives/colored-border.directive";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit, OnDestroy {
  top = Position.top;
  bottom = Position.bottom;

  audio: HTMLAudioElement = new Audio('assets/Ievan_Polkka.mp3');
  song: PlayerSong = playerSong;

  isPlaying = false;
  isLooped = false;

  playbackProgress: number = 0;
  playbackValue = {
    minutes: 0,
    seconds: 0
  };
  progressIntervalId?: number;

  rewindStep = 10;

  constructor() {
    this.audio.load();
  }

  calculateTimeElapsed() {
    const playbackValueInMinutes = Math.floor(this.audio.currentTime / 60);

    this.playbackValue.minutes = playbackValueInMinutes;
    this.playbackValue.seconds = Math.floor(this.audio.currentTime - playbackValueInMinutes * 60);
  }

  calculateProgress() {
    this.playbackProgress = this.audio.currentTime / this.audio.duration;
  }

  playSong() {
    this.audio.play()
      .then(() => {
        this.isPlaying = true;
        this.progressIntervalId = setInterval(() => {
          if (this.audio.ended) {
            this.audio.currentTime = 0;
            this.pauseSong();
          }

          this.calculateTimeElapsed();
          this.calculateProgress();
        }, 250)
      });
  }

  pauseSong() {
    this.isPlaying = false;
    this.audio.pause();
    clearInterval(this.progressIntervalId);
  }

  rewindSong(step: number) {
    this.audio.currentTime += step;
    this.calculateTimeElapsed();
    this.calculateProgress();
  }

  loopAudioSwitch() {
    this.audio.loop = !this.audio.loop;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.audio.pause();
  }

}

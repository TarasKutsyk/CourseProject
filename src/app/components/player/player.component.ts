import { Component, OnInit } from '@angular/core';

import playerSong from '../../../data/player_song.json';
import {PlayerSong} from "../../models/PlayerSong";
import {Position} from "../../directives/colored-border.directive";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit {
  top = Position.top;
  bottom = Position.bottom;

  song: PlayerSong = playerSong;
  playbackProgress: number = 0.77;

  playbackValue = {
    minutes: 0,
    seconds: 0
  };

  constructor() {
    const playbackValueInSeconds = this.playbackProgress * this.song.duration;
    const playbackValueInMinutes = Math.floor(playbackValueInSeconds / 60);

    this.playbackValue.minutes = playbackValueInMinutes;
    this.playbackValue.seconds = Math.floor(playbackValueInSeconds - playbackValueInMinutes * 60);
  }

  ngOnInit(): void {
  }

}

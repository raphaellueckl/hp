import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.transition';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-music-notes',
  templateUrl: './music-notes.component.html',
  styleUrls: ['./music-notes.component.css'],
  animations: [routerTransition()]
})
export class MusicNotesComponent implements OnInit {

  readonly tunes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C#', 'D#', 'F#', 'G#', 'A#', 'C#`'];
  // readonly tunes1 = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A#', 'C#`'];

  currentNote: string;
  data: Observable<string>;
  spitRandomChars;

  interval: number = 3000;
  minInterval: number = 0;
  maxInterval: number = 5000;

  constructor() { }

  ngOnInit() {
  }

  randomChar(): string {
    return this.tunes[Math.floor(Math.random() * this.tunes.length)];
  }

  onStart() {
    clearInterval(this.spitRandomChars);
    this.currentNote = this.randomChar();
    this.spitRandomChars = setInterval(() => {
      this.currentNote = this.randomChar();
    }, this.interval);
  }

  onStop() {
    clearInterval(this.spitRandomChars);
    this.currentNote = '';
  }

}

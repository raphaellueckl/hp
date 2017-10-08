import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../router.transition';
import {Observable} from 'rxjs/Observable';
import {NoteTuple} from './single-music-note/note-tuple';

@Component({
  selector: 'app-music-notes',
  templateUrl: './music-notes.component.html',
  styleUrls: ['./music-notes.component.css'],
  animations: [routerTransition()]
})
export class MusicNotesComponent implements OnInit {

  readonly tunes = [
    new NoteTuple('A#', 'assets/images/music-notes/a0.png'),
    new NoteTuple('A', 'assets/images/music-notes/a.png'),
    new NoteTuple('A#', 'assets/images/music-notes/a_0.png'),
    new NoteTuple('A', 'assets/images/music-notes/a_.png'),
    new NoteTuple('B', 'assets/images/music-notes/b.png'),
    new NoteTuple('B', 'assets/images/music-notes/b_.png'),
    new NoteTuple('C#', 'assets/images/music-notes/c0.png'),
    new NoteTuple('C', 'assets/images/music-notes/c.png'),
    new NoteTuple('C#', 'assets/images/music-notes/c_0.png'),
    new NoteTuple('C', 'assets/images/music-notes/c_.png'),
    new NoteTuple('D#', 'assets/images/music-notes/d0.png'),
    new NoteTuple('D', 'assets/images/music-notes/d.png'),
    new NoteTuple('D#', 'assets/images/music-notes/d_0.png'),
    new NoteTuple('D', 'assets/images/music-notes/d_.png'),
    new NoteTuple('E', 'assets/images/music-notes/e.png'),
    new NoteTuple('E', 'assets/images/music-notes/e_.png'),
    new NoteTuple('F#', 'assets/images/music-notes/f0.png'),
    new NoteTuple('F', 'assets/images/music-notes/f.png'),
    new NoteTuple('F', 'assets/images/music-notes/f_.png'),
    new NoteTuple('G#', 'assets/images/music-notes/g0.png'),
    new NoteTuple('G', 'assets/images/music-notes/g.png')
  ];

  map: Map<string, NoteTuple> = new Map();

  currentNote: NoteTuple;

  data: Observable<string>;
  spitRandomChars;

  interval: number = 3000;
  minInterval: number = 0;
  maxInterval: number = 5000;

  constructor() {
  }

  ngOnInit() {
  }

  private randomChar(): NoteTuple {
    return this.tunes[Math.floor(Math.random() * this.tunes.length)];
  }

  onStart() {
    clearInterval(this.spitRandomChars);
    const previousNote = this.currentNote;
    while (this.currentNote === previousNote) {
      this.currentNote = this.randomChar();
    }
    this.spitRandomChars = setInterval(() => {
      this.currentNote = this.randomChar();
    }, this.interval);
  }

  onStop() {
    clearInterval(this.spitRandomChars);
    this.currentNote = undefined;
  }

}

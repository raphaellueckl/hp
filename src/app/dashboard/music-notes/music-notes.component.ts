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

  // readonly tunes = ['a#', 'a', 'a_#', 'a_', 'b', 'b_', 'c#', 'c', 'c_#', 'c_', 'd#', 'd', 'd_#', 'd_', 'e', 'e_', 'f#',
  //   'f', 'f_', 'g#', 'g'];

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
    // this.map.set('a#', new NoteTuple('A#', 'assets/images/music-notes/a0.png'));
    // this.map.set('a', new NoteTuple('A', 'assets/images/music-notes/a.png'));
    // this.map.set('a_#', new NoteTuple('A#', 'assets/images/music-notes/a_0.png'));
    // this.map.set('a_', new NoteTuple('A', 'assets/images/music-notes/a_.png'));
    // this.map.set('b', new NoteTuple('B', 'assets/images/music-notes/b.png'));
    // this.map.set('b_', new NoteTuple('B', 'assets/images/music-notes/b_.png'));
    // this.map.set('c#', new NoteTuple('C#', 'assets/images/music-notes/c0.png'));
    // this.map.set('c', new NoteTuple('C', 'assets/images/music-notes/c.png'));
    // this.map.set('c_#', new NoteTuple('C#', 'assets/images/music-notes/c_0.png'));
    // this.map.set('c_', new NoteTuple('C', 'assets/images/music-notes/c_.png'));
    // this.map.set('d#', new NoteTuple('D#', 'assets/images/music-notes/d0.png'));
    // this.map.set('d', new NoteTuple('D', 'assets/images/music-notes/d.png'));
    // this.map.set('d_#', new NoteTuple('D#', 'assets/images/music-notes/d_0.png'));
    // this.map.set('d_', new NoteTuple('D', 'assets/images/music-notes/d_.png'));
    // this.map.set('e', new NoteTuple('E', 'assets/images/music-notes/e.png'));
    // this.map.set('e_', new NoteTuple('E', 'assets/images/music-notes/e_.png'));
    // this.map.set('f#', new NoteTuple('F#', 'assets/images/music-notes/f0.png'));
    // this.map.set('f', new NoteTuple('F', 'assets/images/music-notes/f.png'));
    // this.map.set('f_', new NoteTuple('F', 'assets/images/music-notes/f_.png'));
    // this.map.set('g#', new NoteTuple('G#', 'assets/images/music-notes/g0.png'));
    // this.map.set('g', new NoteTuple('G', 'assets/images/music-notes/g.png'));
  }

  ngOnInit() {
  }

  private randomChar(): NoteTuple {
    return this.tunes[Math.floor(Math.random() * this.tunes.length)];
    // return this.tunes[0];
  }

  onStart() {
    clearInterval(this.spitRandomChars);
    this.currentNote = this.randomChar();
    console.log(this.currentNote)
    this.spitRandomChars = setInterval(() => {
      this.currentNote = this.randomChar();
    }, this.interval);
  }

  onStop() {
    clearInterval(this.spitRandomChars);
    this.currentNote = undefined;
  }

}

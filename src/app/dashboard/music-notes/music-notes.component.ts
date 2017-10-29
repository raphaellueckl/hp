import {Component, OnInit} from '@angular/core';
import {routerTransition} from '../router.transition';
import {Observable} from 'rxjs/Observable';
import {Note} from './single-music-note/note';

@Component({
  selector: 'app-music-notes',
  templateUrl: './music-notes.component.html',
  styleUrls: ['./music-notes.component.css'],
  animations: [routerTransition()]
})
export class MusicNotesComponent implements OnInit {

  readonly notes = [
    new Note('A#', 'assets/images/music-notes/a0.png', 'sharp'),
    new Note('A', 'assets/images/music-notes/a.png'),
    new Note('A#', 'assets/images/music-notes/a_0.png', 'sharp'),
    new Note('A', 'assets/images/music-notes/a_.png'),
    new Note('B', 'assets/images/music-notes/b.png'),
    new Note('B', 'assets/images/music-notes/b_.png'),
    new Note('C#', 'assets/images/music-notes/c0.png', 'sharp'),
    new Note('C', 'assets/images/music-notes/c.png'),
    new Note('C#', 'assets/images/music-notes/c_0.png', 'sharp'),
    new Note('C', 'assets/images/music-notes/c_.png'),
    new Note('D#', 'assets/images/music-notes/d0.png', 'sharp'),
    new Note('D', 'assets/images/music-notes/d.png'),
    new Note('D#', 'assets/images/music-notes/d_0.png', 'sharp'),
    new Note('D', 'assets/images/music-notes/d_.png'),
    new Note('E', 'assets/images/music-notes/e.png'),
    new Note('E', 'assets/images/music-notes/e_.png'),
    new Note('F#', 'assets/images/music-notes/f0.png', 'sharp'),
    new Note('F', 'assets/images/music-notes/f.png'),
    new Note('F', 'assets/images/music-notes/f_.png'),
    new Note('G#', 'assets/images/music-notes/g0.png', 'sharp'),
    new Note('G', 'assets/images/music-notes/g.png')
  ];

  map: Map<string, Note> = new Map();

  currentNote: Note;

  data: Observable<string>;
  spitRandomChars;
  sharpsActivated = true;
  lettersActivated = true;

  interval = 3000;
  minInterval = 0;
  maxInterval = 5000;

  constructor() {
  }

  ngOnInit() {
  }

  onStart() {
    clearInterval(this.spitRandomChars);
    this.currentNote = this.randomNote();
    const previousNote = this.currentNote;

    this.spitRandomChars = setInterval(() => {
      this.currentNote = this.randomNote();
      while (this.currentNote === previousNote || !this.sharpsActivated && this.currentNote.category === 'sharp') {
        this.currentNote = this.randomNote();
      }
    }, this.interval);
  }

  onStop() {
    clearInterval(this.spitRandomChars);
    this.currentNote = undefined;
  }

  toggleSharps() {
    this.sharpsActivated = !this.sharpsActivated;
  }

  toggleLetters() {
    this.lettersActivated = !this.lettersActivated;
  }

  private randomNote(): Note {
    return this.notes[Math.floor(Math.random() * this.notes.length)];
  }

}

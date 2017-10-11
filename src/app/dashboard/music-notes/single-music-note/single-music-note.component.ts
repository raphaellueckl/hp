import {Component, Input, OnInit} from '@angular/core';
import {Note} from './note';

@Component({
  selector: 'app-single-music-note',
  templateUrl: './single-music-note.component.html',
  styleUrls: ['./single-music-note.component.css']
})
export class SingleMusicNoteComponent implements OnInit {

  @Input()
  currentNote: Note;

  @Input()
  showLetters: boolean;

  constructor() {}

  ngOnInit() {
  }

}

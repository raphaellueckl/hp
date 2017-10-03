import {Component, Input, OnInit} from '@angular/core';
import {NoteTuple} from './note-tuple';

@Component({
  selector: 'app-single-music-note',
  templateUrl: './single-music-note.component.html',
  styleUrls: ['./single-music-note.component.css']
})
export class SingleMusicNoteComponent implements OnInit {

  @Input()
  currentNote: NoteTuple;

  constructor() {}

  ngOnInit() {
  }

}

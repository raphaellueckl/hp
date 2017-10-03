import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMusicNoteComponent } from './single-music-note.component';

describe('SingleMusicNoteComponent', () => {
  let component: SingleMusicNoteComponent;
  let fixture: ComponentFixture<SingleMusicNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMusicNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMusicNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicNotesComponent } from './music-notes.component';

describe('MusicNotesComponent', () => {
  let component: MusicNotesComponent;
  let fixture: ComponentFixture<MusicNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

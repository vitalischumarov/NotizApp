import {Component, EventEmitter, Output, input, SimpleChange, SimpleChanges} from '@angular/core';
import {NoteCardComponent} from './note-card-component/note-card-component';
import {NoteModel} from '../../../../Model/NoteModel';

@Component({
  selector: 'app-left-site-component',
  imports: [NoteCardComponent],
  templateUrl: './left-site-component.html',
  styleUrl: './left-site-component.css',
})
export class LeftSiteComponent {

  @Output() triggerToClearInputField = new EventEmitter<boolean>();
  allNotesInChild = input<NoteModel[]>([]);
  test = [1,2,3,4];

  newNoteButton()
  {
    this.triggerToClearInputField.emit(true);
  }
}

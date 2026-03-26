import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NoteCardComponent} from './note-card-component/note-card-component';

@Component({
  selector: 'app-left-site-component',
  imports: [NoteCardComponent],
  templateUrl: './left-site-component.html',
  styleUrl: './left-site-component.css',
})
export class LeftSiteComponent {

  @Output() triggerToClearInputField = new EventEmitter<boolean>();

  newNoteButton()
  {
    this.triggerToClearInputField.emit(true);
  }

}

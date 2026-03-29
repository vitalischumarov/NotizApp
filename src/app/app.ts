import {Component, signal, Output, EventEmitter} from '@angular/core';
import {HeaderComponent} from './components/header-component/header-component';
import {LeftSiteComponent} from './components/LeftSite/left-site-component/left-site-component';
import {MainAreaComponent} from './components/MainArea/main-area-component/main-area-component';
import {NoteService} from './Services/NoteService';
import {NoteModel} from '../Model/NoteModel';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, LeftSiteComponent, MainAreaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('NotizenApp');

  constructor(private service: NoteService) {}

  toggle: boolean = false;
  toggleSave: boolean = false;
  allNotesInParent: NoteModel[] = []


  clearFields(value: boolean)
  {
    if (this.toggle)
    {
      this.toggle = false;
    }
    else
    {
        this.toggle = true;
    }
  }

  saveNote()
  {
    if (this.toggleSave)
    {
      this.toggleSave = false;
    }
    else
    {
      this.toggleSave = true;
    }
  }

  deleteNote()
  {
    alert('delete note');
  }

  currentNotes(notes: NoteModel[])
  {
    this.allNotesInParent = notes;
  }
}

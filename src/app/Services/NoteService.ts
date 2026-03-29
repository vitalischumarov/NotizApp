import {Injectable} from '@angular/core';
import {NoteModel} from '../../Model/NoteModel';

@Injectable({ providedIn: 'root'})
export class NoteService
{
  note!: NoteModel
  myNotesList: NoteModel[] = [];

  createNewNote(title: string, description: string) : NoteModel[]
  {
    this.note = new NoteModel(title, description);
    this.myNotesList.push(this.note);
    return this.myNotesList;
  }
}

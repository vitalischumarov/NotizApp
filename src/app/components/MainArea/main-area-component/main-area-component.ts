import {Component, SimpleChanges, Input, signal, output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NoteService} from '../../../Services/NoteService';
import {NoteModel} from '../../../../Model/NoteModel';

@Component({
  selector: 'app-main-area-component',
  imports: [FormsModule],
  templateUrl: './main-area-component.html',
  styleUrl: './main-area-component.css',
})
export class MainAreaComponent {

  @Input() toggleSave: boolean = false;
  @Input() value: boolean = false;

  title: string = "";
  description: string = "";
  myNoteList = signal<NoteModel[]>([]);
  notesToDisplay = output<NoteModel[]>();

  constructor(private service: NoteService) {}

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes['value'])
    {
      this.clearInputFields();
    } else if (changes['toggleSave'])
    {
      this.myNoteList.set(this.service.createNewNote(this.title, this.description));
      this.notesToDisplay.emit(this.myNoteList());
      console.log(this.myNoteList());
      this.clearInputFields();
    }
  }

  clearInputFields()
  {
    this.title = "";
    this.description = "";
  }

}

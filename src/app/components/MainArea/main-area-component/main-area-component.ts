import {Component, SimpleChanges, Input, } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NoteService} from '../../../Services/NoteService';

@Component({
  selector: 'app-main-area-component',
  imports: [FormsModule],
  templateUrl: './main-area-component.html',
  styleUrl: './main-area-component.css',
})
export class MainAreaComponent {

  @Input() value: boolean = false;
  title: string = "";
  description: string = "";

  constructor(private service: NoteService) {}

  ngOnChanges(changes: SimpleChanges)
  {
    if (changes['value'])
    {
      this.service.createNewNote(this.title, this.description);
      this.title = "";
      this.description = "";
    }
  }

}

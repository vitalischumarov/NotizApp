import { Component, input } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-note-card-component',
  imports: [DatePipe],
  templateUrl: './note-card-component.html',
  styleUrl: './note-card-component.css',
})
export class NoteCardComponent {
  title = input<string>('');
  description = input<string>('');
  date = input<Date>();
}

export class NoteModel
{
  id: number;
  title: string;
  description: string;
  date: Date;

  constructor(_title: string, _description: string) {
    this.title = _title;
    this.description = _description;
    this.date = new Date();
    this.id = Math.random();
  }
}

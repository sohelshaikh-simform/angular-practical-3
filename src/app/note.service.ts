import { Injectable } from '@angular/core';

export interface Note {
  id: string;
  name: string;
  createdDate: Date;
  content: string;
  backgroundColor: string;
}

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [
    {
      id: '1',
      name: 'Note 1',
      createdDate: new Date(),
      content: 'Note 1 content',
      backgroundColor: 'white',
    },
    {
      id: '2',
      name: 'Note 2',
      createdDate: new Date(),
      content: 'Note 2 content',
      backgroundColor: 'white',
    },
    {
      id: '3',
      name: 'Note 3',
      createdDate: new Date(),
      content: 'Note 3 content',
      backgroundColor: 'white',
    },
    {
      id: '4',
      name: 'Note 4',
      createdDate: new Date(),
      content: 'Note 4 content',
      backgroundColor: 'white',
    },
    {
      id: '5',
      name: 'Note 5',
      createdDate: new Date(),
      content: 'Note 5 content',
      backgroundColor: 'white',
    },
  ];

  selectedNote: any = null;
  name: string = '';
  date: Date = new Date();
  note: string = '';
  updateName: string = '';
  updateDate: Date = new Date();
  updatenote: string = '';
  isActionDisabled: boolean = false;


  constructor() {}

  addNote(): void {
    const newNote = {
      id: (this.notes.length + 1).toString(),
      name: this.name,
      createdDate: this.date,
      content: this.note,
      backgroundColor: 'green',
    };
    this.notes.push(newNote);
  }

  deleteNote(note: Note): void {
    this.isActionDisabled = true;
    note.backgroundColor = 'red'; // Change background color to red
  }

  updateNote(note: any): void {
    this.selectedNote = note;
    this.updateName = note.name;
    this.updateDate = new Date(note.createdDate);
    this.updatenote = note.content;
  }

  submitUpdate(): void {
    if (this.selectedNote) {
      const updatedNote: any = {
        id: this.selectedNote.id,
        name: this.updateName,
        createdDate: this.updateDate.toISOString(),
        content: this.updatenote,
        backgroundColor: 'orange',
      };

      // Update the note in the notes array
      const index = this.notes.findIndex((n) => n.id === this.selectedNote?.id);
      if (index > -1) {
        this.notes[index] = updatedNote;
      }

      // Clear the selected note and form fields
      this.selectedNote = null;
      this.name = '';
      this.date = new Date();
      this.note = '';
    }
  }

  handleNoteUpdated(updatedNote: any): void {
    // Add the updated note to the notes array
    this.notes.push(updatedNote);
  }

  getNotes(): Note[] {
    return this.notes;
  }
}

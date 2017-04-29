import { Component, Input, OnInit } from '@angular/core';
import { NoteData } from '../models/note-data';

@Component({
  selector: 'sn-note',
  template: `
    <div class="container">
      <div class="title">
        {{ noteData.title }}
      </div>
      <div class="content">
        {{ noteData.content }}
      </div>
    </div>
  `,
  styles: [`
    :host {
     margin: 15px 
    }
    .container {
      width: 300px;
      padding: 10px;
      border: 1px solid black;
      background-color: blanchedalmond;
      color: black;
    }
    .title {
      font-family: sans-serif;
      font-size: 1.2em;
      text-align: center;
      font-weight: bold;
      border-bottom: 1px solid black;
    }
    .content {
      font-family: sans-serif;
      font-size: .9em;
      color: darkslategrey;
      font-weight: normal;
    }
  `]
})
export class NoteComponent implements OnInit {

  @Input() noteData: NoteData;


  ngOnInit() {
  }

}

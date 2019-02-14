import React, { Component } from 'react';
import '../styles/NotesMain.css';
import NoteButton from './NoteButton';

class NotesMain extends Component {
  render() {
    return (
      <div>

        <header>

          <div className="a">
            <h3>Notes</h3>
          </div>

          <div className="b">
            <NoteButton />
          </div>

        </header>

      </div>
    );
  }
}

export default NotesMain;

import React, { Component } from 'react';
import '../styles/NotesMain.css';
import NoteButton from './NoteButton';
import NotePage from './NotePage';

class NotesMain extends Component {
  constructor(){
      super()

      this.state={
        displayNotes : false,
      }

      this.toggleDisplayNotes = this.toggleDisplayNotes.bind(this)
  }

  toggleDisplayNotes(){
    this.setState(() => ({displayNotes : !this.state.displayNotes}))
  }


  render() {
    return (
      <div>

        <header>

          <div className="a">
            <h3>Notes</h3>
          </div>

          <div className="b">
            <NoteButton 
              toggleDisplayNotes={this.toggleDisplayNotes}
              pageType={'new'}
            />
          </div>

        </header>

        {
          !this.state.displayNotes &&
          <div className="note-button-saved">
            <NoteButton pageType={'saved'} />
          </div>
        }

        {
          this.state.displayNotes &&

          <div className="note-page">
            <NotePage />
          </div>


        }

      </div>
    );
  }
}

export default NotesMain;

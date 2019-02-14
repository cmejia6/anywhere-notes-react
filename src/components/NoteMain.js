import React, { Component } from 'react';

import Header from './Header';
import NotePage from './NotePage';
import NotePageGroup from './NotePageGroup';

import '../styles/NotesMain.css';


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
      <div className="container">

        <div className="">
            <Header 
              toggleDisplayNotes={this.toggleDisplayNotes}
              />
        </div>
        
        {
          this.state.displayNotes &&
          <div className="">
            <NotePage />
          </div>
        }

        {
          !this.state.displayNotes &&
          <div className="">
            <NotePageGroup />
          </div>
        }



      </div>
    );
  }
}

export default NotesMain;

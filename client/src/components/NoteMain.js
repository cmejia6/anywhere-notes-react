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
        notes: []
      }

      this.toggleDisplayNotes = this.toggleDisplayNotes.bind(this)
  }

  componentDidMount() {
    const input = {
      'title':'one',
      'note':'noteaddes'
    }
    fetch('/api/notes')/*, {
      method: 'POST',  
      //body: JSON.stringify(input),  
      headers:{
        'Content-Type': 'application/json'
       }
    })*/
    .then(res => res.json())
    .then(notes => this.setState({notes}, () => console.log('Notes fetched...', notes)))
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
            <NotePageGroup
            notes = {this.state.notes} />
          </div>
        }



      </div>
    );
  }
}

export default NotesMain;

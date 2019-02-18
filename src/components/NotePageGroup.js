import React from 'react'
import NotePage from './NotePage';

import '../styles/NotePageGroup.css'

const NotePageGroup = (props) => {
  return (
    <div>

      {
        props.notes.map(notes => 
        <div className="row">
          <div className="col note-page-container">
            <h3>{notes.title}</h3>
            <p>{notes.noteSave}</p>
          </div>
        </div>
          )
      }

    </div>
  )
}

export default NotePageGroup
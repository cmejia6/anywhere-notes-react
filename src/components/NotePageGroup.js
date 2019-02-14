import React from 'react'
import NotePage from './NotePage';

import '../styles/NotePageGroup.css'


const NotePageGroup = () => {
  return (
    
    <div>
      <div className="row">
          <div className="col note-page-container">
            <h3>NoteTitle</h3>
            <p>Description</p>
          </div>
      </div>

      <div className="row">
          <div className="col note-page-container">
            <h3>NoteTitle</h3>
            <p>Description</p>
          </div>
      </div>

      <div className="row">
          <div className="col note-page-container">
            <h3>NoteTitle</h3>
            <p>Description</p>
          </div>
      </div>


        {/*
        <div className="row text-center">
              <div className="col p-4">
                {<NotePage />}
              </div>
        </div>
        */}

    </div>
  )
}

export default NotePageGroup
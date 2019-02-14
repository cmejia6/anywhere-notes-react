import React from 'react'

import NotePage from './NotePage';


const NotePageGroup = () => {
  return (
    <div>
        {
         //this.state.displayNotes &&
          <div className="note-page">
            <NotePage />
          </div>
        }

    </div>
  )
}

export default NotePageGroup

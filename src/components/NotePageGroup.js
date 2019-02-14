import React from 'react'

import NotePage from './NotePage';

import '../styles/NotePageGroup.css'


const NotePageGroup = () => {
  return (
    <div className="row text-center">
          <div className="col p-4">
            <NotePage />
          </div>
    </div>
  )
}

export default NotePageGroup

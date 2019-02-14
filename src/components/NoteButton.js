import React from 'react'
import '../styles/NoteButton.css'

const NoteButton = (props) => {
  return (
    <div className="container">

        {
            props.pageType === 'new' &&

            <button className="btn btn-primary btn-lg" onClick={props.toggleDisplayNotes}>
                <h3 className="a">
                    +
                </h3>
            </button>
        }

        {
            props.pageType === 'saved' &&
            <div className="note-sample-display">
                {/* Should get title and note sample from somewhere maybe backend */}
            </div>
        }

    </div>
  )
}

export default NoteButton

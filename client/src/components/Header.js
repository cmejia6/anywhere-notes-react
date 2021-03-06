import React from 'react'

import '../styles/Header.css'

const Header = (props) => {
  return (
    <div className="">
      <div className="row text-center">
          <div className="col p-3">
            <h3 className="">Notes</h3>
          </div>

          <div className="col p-3">
            <button onClick={props.toggleDisplayNotes}>
              +
            </button>
          </div>

          {/*<div className="b">
              <NoteButton 
                toggleDisplayNotes={this.toggleDisplayNotes}
                pageType={'new'}
              />
          </div>*/}

      </div>
    </div>
  )
}

export default Header

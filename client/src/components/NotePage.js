import React from 'react'

import '../styles/NotePage.css'

const NotePage = (props) => {
  return (
    <div className="">


          <form action="/api/notes" method="post">

            <div className="row">
              <div className="col">
                <input type="text" placeholder="title" name="title"/>
              </div>
            </div>

            
            <div className="row">
              <div className="col note-holder">
                <textarea type="text" placeholder="note" name="note" rows="8"/>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <input type="submit" value="Submit"/>
              </div>
            </div>
            
          </form>
          

    </div>
  )
}

export default NotePage

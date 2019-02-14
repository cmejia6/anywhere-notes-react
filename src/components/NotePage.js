import React from 'react'
//import '../styles/NotePage.css'

const NotePage = (props) => {
  return (
    <div className="page-container">

      <div className="input-field">
        <textarea rows="8" className="a" type="text" placeholder="Write your notes here...">
        </textarea>
      </div>

      <button className ="save btn btn-success">
            Save
        </button>

    </div>
  )
}

export default NotePage

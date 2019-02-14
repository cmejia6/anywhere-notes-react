import React from 'react'

import '../styles/NotePage.css'

const NotePage = (props) => {
  return (
    <div className="">

      <div className="">
        <textarea class="form-control" rows="10"></textarea>
      </div>

      <button className ="save col btn btn-success">
        Save
      </button>

    </div>
  )
}

export default NotePage

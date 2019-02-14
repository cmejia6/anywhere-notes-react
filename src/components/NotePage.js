import React from 'react'

import '../styles/NotePage.css'

const NotePage = (props) => {
  return (
    <div className="">

    <div className="row">
      <div className="col">
        <textarea class="form-control" rows="10"></textarea>
      </div>
    </div>
    

      <div className="row">
        <div className="col">
          <button className ="save col btn btn-success">Save</button>
        </div>
      </div>

    </div>
  )
}

export default NotePage

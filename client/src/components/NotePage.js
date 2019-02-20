import React, { Component } from 'react';

import '../styles/NotePage.css'

class NotePage extends Component {
  constructor(){
    super()

    this.state={
      noteTitle:"",
      noteBody:"",
    }

    this.canBeSubmitted = this.canBeSubmitted.bind(this)
  }
 
  handleTitleChange = (e) => {
    this.setState({noteTitle : e.target.value})
  }

  handleBodyChange = (e) => {
    this.setState({noteBody : e.target.value})
  }

  canBeSubmitted(){
    //const { noteTitle, noteBody } = this.state
    //return noteTitle.length < 1 || noteBody.length < 1
    //return this.state.noteTitle.length > 1 || this.state.noteBody.length > 1
    return true
  }

  render(){
    return(
      <div className="">

        <form action="/api/notes" method="post">

          <div className="row">
            <div className="col">
              <input type="text" placeholder="title" name="title" onChange={this.handleTitleChange} />
            </div>
          </div>
          
          <div className="row">
            <div className="col note-holder">
              <textarea type="text" placeholder="note" name="note" rows="8" onChange={this.handleBodyChange }/>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <input type="submit" value="Submit" disabled={ this.state.noteBody.length < 1 } />
            </div>
          </div>
          
        </form>

      </div>
    )
  }

}

export default NotePage

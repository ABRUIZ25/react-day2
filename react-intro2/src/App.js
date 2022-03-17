
import './App.css';

import React, { Component } from 'react'

export class App extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
    }
  }
  handleOnInputEmailChange = (event) => {
    console.log(event.target.value)
    this.setState({
      email: event.target.value
    })
  }

  handleFistnameChange = (event) => {
    this.setState({
      firstname: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefult()
  }

  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value
    })
  }

  handleOnClickSubmit = (event) => {

  }
  handleOnOneChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <label> email </label>
        <input name="email" value={this.state.email} onChange={this.handleOnInputEmailChange}></input>
        <p>{this.state.email}</p>



        <form onSubmit={this.handleOnSubmit}>

          <input name="firstname" value={this.state.firstname} onChange={this.handleFistnameChange}></input>
          <button>submit</button>
        </form>


        <input name="lastname" value={this.state.lastname} onChange={this.handleLastNameChange}></input>
        <button onClick={this.handleOnClickSubmit}>Submit</button>

        <button className='bigButton' onClick={this.handleOnOneChange}>Submit
          <input name="email" value={this.state.email} onChange={this.handleOnOneChange} />
          <input name="firstname" value={this.state.firstname} onChange={this.handleOnOneChange} />
          <input name="lastname" value={this.state.lastname} onChange={this.handleOnOneChange} />
        </button>



      </div>
    )
  }
}

export default App


import React, {Component} from 'react';
import './App.css';
import {Edamam} from './Edamam.js';

class APP extends Component {
  constructor() {
    super();
    // Create an empty initial state;
    this.state = {
      Recipes: '',
      userInput: '',
    }
  }

  // Binding the user's input to create controlled information
  handleChange = (event) => {
    this.setState({
      userInput: event.target.value,
    })
    console.log(this.state.userInput)
  }

  // Create an event listener for user input
  handleClick = (event) => {
    event.preventDefault();

    // the following setState will empty out the input field after each search
    // this.setState({
    //   userInput: ""
    // })

  }



















  render(){
    return (
      <div className="App"
      tabindex = "-1">
        <h1>Vegan Recipes Generator</h1>
        <form action="">
          <input 
          type = "text"
          name = "search"
          value = {this.state.value}
          placeholder = "Search by name or ingredient"
          onChange = {this.handleChange}
          onClick = {this.handleClick}/>
          <button>Search</button>
        </form>
        
      </div>
    )
  }
}

export default APP;

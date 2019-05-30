import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Edamam} from './Edamam.js';
import { thisTypeAnnotation } from '@babel/types';

class APP extends Component {
  constructor() {
    super();
    // Create an empty initial state;
    this.state = {
      Recipes: [],
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

    const api_id = "5ad9a9d2";
    const api_key = "399ab75c6d5b4547cd58b52f7a7d73fd";
    const { userInput } = this.state;

    axios({
      method: "GET",
      url: `https://api.edamam.com/search`,
      dataResponse: "json",
      params: {
        app_id: api_id,
        app_key: api_key,
        format: "json",
        q: userInput,
        health: "vegan",
        healthLabels: "vegetarian",
        recipe: "recipe",
        
      }
    }).then(response => {
      response = response.data.hits
      console.log(response);

      // the following setState will empty out the input field after each search - set this after your values are being caught
      this.setState({
        Recipes: response
      })

    })

  }


  render(){
    return (
      <div className="App"
      tabIndex = "-1">
        <h1>Vegan Recipes Generator</h1>
        <form action="">
          <input 
          type = "text"
          name = "search"
          value = {this.state.value}
          placeholder = "Search by name or ingredient"
          onChange = {this.handleChange}
          />
          <button onClick = {this.handleClick}>Search</button>
        </form>
      

        {/* <ul>
          <li>
            <h2>{this.state.userInput.recipe.ingredients.label}</h2>
          </li>
        </ul> */}

      
          {this.state.Recipes.map(recipe => {
            console.log(recipe.recipe)


            return (
              <li>
                <h2>{recipe.recipe.label}</h2>
                <img src={recipe.recipe.image} alt={recipe.recipe.label}/>
                  <ul>
                    {recipe.recipe.ingredients.map((ing, i) => {
                      return <li>{ing.text}</li>              
                    })}
                  </ul>
                <h2>{recipe.recipe.url}</h2>      

                  {/* <ul>  
                    {recipe.recipe.ingredientLines.map((steps) => {
                      return <li></li> 
                    })}
                  </ul>  */}

                <ul>
                  {recipe.recipe.healthLabels.map((label, i)=> {
                    return <li>{label}</li>
                  })}
                </ul>                  
                <h3> Serving Size: {recipe.recipe.yield}</h3>
              </li>
            )          
          })}       
        
      </div>


    )
  }
}

export default APP;

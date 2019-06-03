import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import SingleRecipe from './SingleRecipe.js';



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

      this.setState({
        Recipes: response
      })
    })
    
    // this.document.getElementsByClassName("flexContainer").scrollIntoView({
    //   behavior: "smooth"
    // });
    
  }


  render(){
    return (
      <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1>Abbiocco</h1>
          <h4>A Vegan & Vegetarian Recipe Generator</h4>
          <form action="" className="header-form">
            <input 
            type = "text"
            name = "search"
            value = {this.state.value}
            placeholder = "Search for your Vegan or Vegetarian Recipe"
            onChange = {this.handleChange}
            />
            
            <button onClick ={this.handleClick}> Search &#128269; </button>
          </form>
        </div>
      </header> 
      

        <div className="flexContainer">
          {this.state.Recipes.map(recipe => {
            console.log(recipe)


            return (
              <div className = "recipeBook">
                    <SingleRecipe
                    title = {recipe.recipe.label}
                    imgSrc = {recipe.recipe.image} 
                    link = {recipe.recipe.url}
                    yield = {recipe.recipe.yield}
                    ingredients={recipe.recipe.ingredients}
                    healthLabels = {recipe.recipe.healthLabels}
                    />
              </div>
            
            )
            
            
          })} 
        </div>      
        
      </div>


    )
  }
}

export default APP;

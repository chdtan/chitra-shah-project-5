import React from 'react';

const SingleRecipe = (props) => {
    return( 
        <ul className ="recipeCard" key={props.link}>
            <li>
                <h2>{props.title}</h2>
                <img src={props.imgSrc} alt={props.title}/>
                <div className = "recipeContent">
                    <ul>
                        <h3>Ingredient List:</h3>
                        {props.ingredients.map((ing, i) => {
                            return <li>{ing.text}</li>              
                        })}
                    </ul>
                    <ul>
                        <h3>Health Label:</h3>
                        {props.healthLabels.map((label, i)=> {
                            return <li>{label}</li>
                        })} 
                    </ul>      
                    <h3>Serving Size: {props.yield}</h3>
                    <h3><a href={props.link}>Get Recipe Here!</a></h3>
                </div>
            </li>  
        </ul>  
    )
}

export default SingleRecipe
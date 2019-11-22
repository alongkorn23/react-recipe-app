import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

class Recipes extends Component {
    render() { 
        return (  
            <div className="container">
                <div className="row">
                    { this.props.recipes.map(
                        (recipe) => {
                            return (
                                <div key={uuid.v4()} className="col-md-4" style={{ marginBottom: "2rem" }}>
                                    <div className="recipes__box">
                                        <img 
                                            className="recipe__box-img" 
                                            src={recipe.recipe.image} 
                                            alt={recipe.recipe.label}/>
                                            <div className="recipe__text">
                                                <h5 className="recipes__title">
                                                    {recipe.recipe.label.lenght > 20 ? `${recipe.recipe.label.substring(0, 25)}...` : 
                                                    `${recipe.recipe.label}`}
                                                </h5>
                                                <p className="recipes__subtitle">Publisher: <span>
                                                    {recipe.recipe.source}
                                                </span></p>
                                            </div>
                                            <button className="recipe_buttons">
                                                <Link to={{pathname: `/recipe/${recipe.recipe.label}`, state: { recipe: recipe.recipe.label}}}>View Recipe</Link>
                                            </button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
 
export default Recipes;

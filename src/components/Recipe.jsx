import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = "4ada679c1e5e068c9f9b10dd9a900bb6";
const APP_ID = "d5f78ce7";

class Recipe extends Component {
    state = {
        activeRecipe: []
    }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch(`https://api.edamam.com/search?q=${title}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    
        const res = await req.json();
        this.setState({activeRecipe: res.hits[0].recipe});
    }
    
    render() { 
        const recipe = this.state.activeRecipe;
        return (  
            <div className="container">
                    { this.state.activeRecipe.length !== 0 &&

                        <div className="active-recipe">
                            <img className="active-recipe__img" src={recipe.image} alt={recipe.label} />
                            <h3 className="active-recipe__title">{recipe.label}</h3>
                            <h4 className="active-recipe__publisher">Publisher: <span>{recipe.source}</span></h4>
                            <p className="active-recipe__website">Website: <span><a href={recipe.url}>{recipe.url}</a></span></p>
                            <button className="active-recipe__button">
                                <Link to="/">Go Home</Link>
                            </button>
                        </div>  
                    }  
            </div>
        );
    }
}
 
export default Recipe;
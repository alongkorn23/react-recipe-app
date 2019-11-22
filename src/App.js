import React from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = "4ada679c1e5e068c9f9b10dd9a900bb6";
const APP_ID = "d5f78ce7";

class App extends React.Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    const api_call = await fetch(`https://api.edamam.com/search?q=${recipeName}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
    
    const data = await api_call.json();
    this.setState({recipes: data.hits});
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const json_recipes = JSON.parse(json);
    this.setState({recipes: json_recipes});
  }

  componentDidUpdate = () => {
    const update_recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", update_recipes);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}
export default App;

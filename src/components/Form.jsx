import React, { Component } from 'react';

class Form extends Component {
    render() { 
        return (  
            <form onSubmit={this.props.getRecipe} style={{ marginBottom: "2rem" }}>
                <input className="form__input" type="text" name="recipeName"/>
                <button className="form__button">Search</button>
            </form>
        );
    }
}
export default Form;
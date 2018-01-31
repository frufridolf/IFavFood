import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';
import logo from './images/vaxthuset.jpg';
import './App.css';
import store from './reducers.js';


//****************komponent nedan */
let nextRecipeId = 0;
class RecipeApp extends Component {
  render() {
    return (
      // className="App"
      <div>
         <div className="App row">
           <div className="col">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">IFavFood</h1>
            </header>
            <p className="App-intro">
              Welcome
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-left">
            <div>
            <label>Recept namn </label>
            <input ref={node => {
                this.input = node;
            }} />
            </div>
            <div>
            <label>Lägg till recept ingrediens </label>
            <input ref={node => {
                this.inputIngredient = node;
            }} />
            </div>
            <div>
            <button onClick={ () => {
              store.dispatch({
                type: 'ADD_RECIPE',
                id: nextRecipeId ++,
                name: this.input.value,
                ingredients: ['smör', 'kakao'],
                instructions: ['blanda smör och kakao', 'bred ut'],
                level: '1',
                timeEstimate: '10 min',
                addedToSchedule: false,
                weekNo : 0
              })
            }}>Lägg till recept</button>
            <ul>
              {  this.props.recipes.map(recipe =>
                <li key={recipe.id}>
                  {recipe.name}
                </li>
              )}
            </ul>
            </div>
          </div>
          <div className="col-md-3 col-center" xs={6} sm={6} md={8} lg={10}>test2</div>
          <div className="col-md-3 col-right" xs={6} sm={3} md={2} lg={1}>test3</div>
        </div>
        
      
         
        
      </div>
    );
  }
}

//***komponent ovan */
export default RecipeApp

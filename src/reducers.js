import Redux  from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import {combineReducers} from 'redux';
import {createStore} from 'redux';
import { Component } from 'react';
//below imports from app.js
import logo from './images/logo.jpg';
import RecipeApp from './App.js';


const recipe = (state, action)  => {
    switch (action.type) {
        case 'ADD_RECIPE':
          return {
            id : action.id,
            name: action.name,
            ingredients: action.ingredients,
            instructions: action.instructions,
            level: action.level,
            timeEstimate: action.timeEstimate,
            addedToSchedule: false,
            weekNo : action.weekNo
          };
          case 'TOGGLE_RECIPE':
            if (state.id !== action.id) {
              return state;
            }
            return {
              ...state,
              addedToSchedule: !action.addedToSchedule,
              weekNo: !action.addedToSchedule ? action.weekNo: 0
            };
                
          default:
            return state;    
    };
};

const recipes =  (state = [], action)  => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return [
        ...state,
        recipe(undefined, action)
      ];
      case 'TOGGLE_RECIPE':
        return state.map( r => recipe(r, action));
      default:
        return state;
    };  
};

//const {combineReducers} = Redux;

const recipeApp = combineReducers({
  recipes
});

//const {createStore} = Redux;
const store = createStore(recipeApp);
export default store;




const render = ()=> {
  ReactDOM.render(<RecipeApp recipes={store.getState().recipes}
  />, document.getElementById('root'));

}
store.subscribe(render);
render(); // run once to create initial state.

//https://egghead.io/lessons/react-redux-react-todo-list-example-adding-a-todo

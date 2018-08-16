import objectAssign from 'object-assign';
import * as types from './../constants/actions.types';

const item =  { "id": 1, "title": "Title One", "author": "typicode", "img": "http://via.placeholder.com/350x250?text=one" };

export default function(state = {header: "Hello World", items: [item], emailInput: null , subscribed: false}, action) {
  
  switch (action.type) {
    case types.GET_ITEMS:
      console.log("REDUCER: GET_ITEMS");
      console.log(action.payload.data);
      return objectAssign({}, state, {items: action.payload.data})      
    default: return state;
  }
}
var redux = require('redux');

console.log('Starting redux example');

var stateDefaults = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefaults, action) => {
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log(currentState);

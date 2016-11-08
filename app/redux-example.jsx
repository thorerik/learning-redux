var redux = require('redux');

cl('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
      break;
    default:
      return state;
  }
};
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  cl(state, 'state');
  document.getElementById('app').innerHTML = state.name;
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Mrow'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Meow'
});

//unsubscribe();

function cl(data, prefix = 'app') {
  console.log(`[${prefix}]`, data);
}

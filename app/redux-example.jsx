var redux = require('redux');

console.log('[app]', 'Starting redux example');

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
var store = redux.createStore(reducer);

console.log('[state]', store.getState());

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Mrow'
});

console.log('[state]', store.getState());

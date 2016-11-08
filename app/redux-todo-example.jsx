var redux = require('redux');

cl('Starting redux example');

var stateDefaults = {
  searchText: '',
  showCompleted: false,
  todos: []
};
var reducer = (state = stateDefaults, action) => {
  switch(action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};
var store = redux.createStore(reducer);

cl(store.getState(), 'state');

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Mrow'
});

cl(store.getState(), 'state');

function cl(data, prefix = 'app') {
  console.log(`[${prefix}]`, data);
}

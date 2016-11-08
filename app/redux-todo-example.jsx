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
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  cl(state, 'state');
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Mrow'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Woof'
});

unsubscribe();

function cl(data, prefix = 'app') {
  console.log(`[${prefix}]`, data);
}

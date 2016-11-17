var redux = require('redux');

cl('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;

var nameReducer = (state = 'Anonymous', action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

var moviesReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIE':
      return [
          ...state,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ];
    case 'REMOVE_MOVIE':
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

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
  type: 'ADD_HOBBY',
  hobby: 'Eat'
});

store.dispatch({
  type: 'ADD_HOBBY',
  hobby: 'Sleep'
});

store.dispatch({
  type: 'REMOVE_HOBBY',
  id: 2
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Meow'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Mad Max',
  genre: 'Action'
});

store.dispatch({
  type: 'ADD_MOVIE',
  title: 'Care Bears The Movie',
  genre: 'Horror'
});

store.dispatch({
  type: 'REMOVE_MOVIE',
  id: 1
});

//unsubscribe();

function cl(data, prefix = 'app') {
  console.log(`[${prefix}]`, data);
}

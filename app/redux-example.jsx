var redux = require('redux');

cl('Starting redux example');

var stateDefault = {
  name: 'Anonymous',
  hobbies: [],
  movies: []
};
var nextHobbyId = 1;
var nextMovieId = 1;
var reducer = (state = stateDefault, action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyId++,
            hobby: action.hobby
          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies: state.hobbies.filter((item) => item.id !== action.id)
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          {
            id: nextMovieId++,
            title: action.title,
            genre: action.genre
          }
        ]
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter((item) => item.id !== action.id)
      }
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

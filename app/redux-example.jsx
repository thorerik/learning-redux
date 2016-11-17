var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

cl('Starting redux example');

// -------------------


var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  cl(state, 'state');
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading…';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View your location</a>';
  }
});

// -------------------

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Mrow'));

store.dispatch(actions.addHobby('Eat'));
store.dispatch(actions.addHobby('Sleep'));
store.dispatch(actions.removeHobby(2));

store.dispatch(actions.changeName('Meow'));

store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addMovie('Care Bears The Movie', 'Horror'));
store.dispatch(actions.removeMovie(1));


//unsubscribe();

function cl(data, prefix = 'app') {
  console.log(`[${prefix}]`, data);
}

var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Wake up'));
store.dispatch(actions.setSearchText('Yard'));
store.dispatch(actions.toggleShowCompleted());


// Load foundation - allows use of foundation css framework
$(document).foundation();

// App css - allows to add own css/sass
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);

require('babel/polyfill');
require('./tags/todo.tag');
require('./tags/todoapp.tag');

import TodoStore from './todostore';

var todoStore = new TodoStore(); // Create a store instance.
RiotControl.addStore(todoStore); // Register the store in central dispatch.
riot.mount('todoapp'); // Kickoff the Riot app.



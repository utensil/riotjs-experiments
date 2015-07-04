require('babel/polyfill');
require('./assets/less/todo.less');
require('./tags/todo.jade.tag');
require('./tags/todoapp.tag');

import TodoStore from './todostore';

var todoStore = new TodoStore(); // Create a store instance.
RiotControl.addStore(todoStore); // Register the store in central dispatch.
riot.mount('div#main', 'todoapp'); // Kickoff the Riot app.

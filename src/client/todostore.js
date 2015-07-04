/*
  This file is adapted from https://github.com/jimsparkman/RiotControl/blob/master/demo/todostore.js
*/

// TodoStore definition.
// Flux stores house application logic and state that relate to a specific domain.
// In this case, a list of todo items.
export default function TodoStore() {
  riot.observable(this); // Riot provides our event emitter.
  
  var self = this;

  this.todos = [
    { title: 'Avoid excessive coffeine', done: true },
    { title: 'Hidden item', hidden: true },
    { title: 'Be less provocative' },
    { title: 'Be nice to people' }
  ];

  // Our store's event handlers / API.
  // This is where we would use AJAX calls to interface with the server.
  // Any number of views can emit actions/events without knowing the specifics of the back-end.
  // This store can easily be swapped for another, while the view components remain untouched.

  this.now = () => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  };

  this.on('todo_add', (newTodo) => {
    this.todos.push(newTodo);
    this.trigger('todos_changed', this.todos, this.now());        
  })

  this.on('todo_remove', () => {
    this.todos.pop();
    this.trigger('todos_changed', this.todos, this.now());
  })

  this.on('todo_init', () => {
    this.trigger('todos_changed', this.todos);
  })

  // The store emits change events to any listening views, so that they may react and redraw themselves.
}
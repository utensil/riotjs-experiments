require("babel/polyfill");
require('./tags/todo.tag');

riot.mount('todo', {
  title: 'I want to behave!',
  items: [
    { title: 'Avoid excessive coffeine', done: true },
    { title: 'Hidden item', hidden: true },
    { title: 'Be less provocative' },
    { title: 'Be nice to people' }
  ]
});


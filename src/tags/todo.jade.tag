todo
  h3 { opts.title }
  ul
    li(each="{ items.filter(filter) }")
      input(type="checkbox" checked="{ done }" onclick="{ parent.toggle }")
      label(class="{ completed: done }") { title }
  form(onsubmit="{ add }")
    input(name="input" onkeyup="{ edit }")
    button(disabled="{ !text }") Add \#{ items.filter(filter).length + 1 }
    button(disabled="{ !items.length }" onclick="{ remove }") Remove \#{ items.filter(filter).length }
  p(if="{ now }") Last updated at { now }
  script.
    var self = this;

    this.disabled = true;
    this.items = [];
    this.now = null;

    this.on('mount', () => {
      // Trigger init event when component is mounted to page.
      // Any store could respond to this.
      RiotControl.trigger('todo_init');
    });

    // Register a listener for store change events.
    RiotControl.on('todos_changed', (items, timestamp) => {
      this.items = items;
      this.now = timestamp;
      this.update();
    });

    this.edit = (e) => {
      this.text = e.target.value;
    };

    this.add = (e) => {
      if (this.text) {
        // Trigger event to all stores registered in central dispatch.
        // This allows loosely coupled stores/components to react to same events.
        RiotControl.trigger('todo_add', 
          { title: `^_^ ${this.text}` });
        this.text = this.input.value = '';
      }
    };

    // an example how to filter items on the list
    this.filter = (item) => {
      return !item.hidden;
    };

    this.toggle = (e) => {
      var item = e.item;
      item.done = !item.done;
      return true;
    };

    this.remove = (e) => {
      RiotControl.trigger('todo_remove');
    }

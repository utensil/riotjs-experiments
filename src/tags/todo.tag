todo
  h3 { opts.title }
  ul
    li(each="{ items.filter(filter) }")
      input(type="checkbox" checked="{ done }" onclick="{ parent.toggle }")
      label(class="{ completed: done }") { title }
  form(onsubmit="{ add }")
    input(name="input" onkeyup="{ edit }")
    button(disabled="{ !text }") Add # { items.filter(filter).length + 1 }
  p(if="{ now }") Last updated at { now }
  script.
    this.items = opts.items;

    this.now = null;

    this.edit = (e) => {
      this.text = e.target.value;
    };

    this.add = (e) => {
      if (this.text) {
        this.items.push({ title: `^_^ ${this.text}` });
        this.items = _.shuffle(this.items);
        this.text = this.input.value = '';
        this.now = moment().format('YYYY-MM-DD HH:mm:ss');
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

todo
  h3 { opts.title }
  ul
    li(each="{ items.filter(filter) }")
      input(type="checkbox" checked="{ done }" onclick="{ parent.toggle }")
      label(class="{ completed: done }") { title }
  form(onsubmit="{ add }")
    input(name="input" onkeyup="{ edit }")
    button(disabled="{ !text }") Add # { items.filter(filter).length + 1 }
  script.
    this.items = opts.items;

    this.edit = function (e) {
      this.text = e.target.value;
    };

    this.add = function (e) {
      if (this.text) {
        this.items.push({ title: `^_^ ${this.text}` });
        this.text = this.input.value = '';
      }
    };

    // an example how to filter items on the list
    this.filter = function (item) {
      return !item.hidden;
    };

    this.toggle = function (e) {
      var item = e.item;
      item.done = !item.done;
      return true;
    };

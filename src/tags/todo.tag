<todo>

  <h3>{ opts.title }</h3>

  <ul>
    <li each={ items.filter(filter) }>
      <label class={ completed: done }>
        <input type="checkbox" checked={ done } onclick={ parent.toggle }> { title }
      </label>
    </li>
  </ul>

  <form onsubmit={ add }>
    <input name="input" onkeyup={ edit }>
    <button disabled={ !text }>Add #{ items.filter(filter).length + 1 }</button>
  </form>

  <!-- this script tag is optional -->
  <script>
    this.items = opts.items;

    this.edit = function (e) {
      this.text = e.target.value;
    }

    this.add = function (e) {
      if (this.text) {
        this.items.push({ title: this.text });
        this.text = this.input.value = '';
      }
    }

    // an example how to filter items on the list
    this.filter = function (item) {
      return !item.hidden;
    }

    this.toggle = function (e) {
      var item = e.item;
      item.done = !item.done;
      return true;
    }
  </script>

</todo>
const model = ["Hello World", "Goodbye World"];

class View  {
  constructor(model, node) {
  this.model = model;
  this.node = node;
  }
  state = 1;
  update = function() {
    let newState = !this.state ? 1 : 0;
    this.state = newState;
    this.node.textContent = this.model[newState];
  }
}

class Control  {
  constructor(v, node) {
  this.view = v;
  this.button = node;
  this.button.addEventListener('click', this.updateViewHandler.bind(this));
  }
  updateViewHandler() {
    this.view.update()
  }
}

const viewNode = document.querySelector('.view');
const controllerBtn = document.getElementById('controller');

const V = new View(model, viewNode);
const C = new Control(V, controllerBtn);


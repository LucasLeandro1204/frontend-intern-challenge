export default {
  components: [],

  use (component) {
    this.components.push(component);
  },

  go () {
    this.components.forEach((component) => {
      let element = document.querySelector(component.selector());
      element.innerHTML = component.template.apply(Object.assign({}, component.methods, component.data()));
    });
  }
}

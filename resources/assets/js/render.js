export default {
  components: [],

  use (component) {
    this.components.push(component);
  },

  go () {
    this.components.forEach((component) => {
      let raw = component.template.apply(Object.assign({}, component.methods, component.data()))
      let element = document.querySelector(component.selector());

      element.innerHTML = raw;

      component.methods = Object.assign({}, component.methods, component.data());

      if (component.mounted) {
        component.mounted.apply(Object.assign({}, component.methods));
      }
    });
  }
}

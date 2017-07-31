export default {
  selector () {
    return '.shortener-field';
  },

  data () {
    return {

    }
  },

  template () {
    return `
      <div class="input-wrapper">
        <input type="text" placeholder="Cole o seu link aqui">
        <button type="reset">&times;</button>
      </div>
      <button type="button" class="shorten">ENCURTAR</button>
    `
  },

  methods: {
  }
}

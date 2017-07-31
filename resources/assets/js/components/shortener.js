export default {
  selector () {
    return '.shortener-field';
  },

  data () {
    return {
      flag: false,
      wrapper: document.querySelector('.shortener-field'),
      input: document.querySelector('.input-wrapper input'),
      reset: document.querySelector('.input-wrapper button'),
      button: document.querySelector('#btn-shortener'),
    }
  },

  template () {
    return `
      <div class="input-wrapper">
        <input type="text" placeholder="Cole o seu link aqui">
        <button type="reset" class="reset">&times;</button>
      </div>
      <button id="btn-shortener" type="button">
        <span class="shorter">ENCURTAR</span>
        <span class="copy">COPIAR</span>
      </button>
    `
  },

  mounted () {
    this.inputListener();
    this.resetListener();
  },

  methods: {
    inputListener () {
      this.button.addEventListener('click', () => {
        if (! this.flag) {
          this.wrapper.classList.add('active');
          this.reset.style.display = 'inherit';

          this.input.style.opacity = 0;
          this.input.addEventListener('transitionend', this.inputFn());
          this.flag = true;
        }
      });
    },

    inputFn () {
      this.input.value = 'https://fake.shrt/3f32s';
      this.input.style.opacity = 1;
      this.reset.style.opacity = 1;

      this.input.removeEventListener('transitionend', this.inputFn);
    },

    resetListener () {
      this.reset.addEventListener('click', () => {
        if (this.flag) {
          this.wrapper.classList.remove('active');

          this.input.style.opacity = 0;
          this.reset.style.opacity = 0;
          this.input.addEventListener('transitionend', this.resetFn());

          this.flag = false;
        }
      });
    },

    resetFn () {
      this.input.value = '';
      this.input.style.opacity = 1;
      this.reset.style.display = 'none';
      this.input.removeEventListener('transitionend', this.resetFn);
    }
  }
}

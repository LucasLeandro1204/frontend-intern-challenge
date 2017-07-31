import './ready.js';
import render from './render.js';

import top from './components/top.js';
import shortener from './components/shortener.js';

render.use(top);
render.use(shortener);

docReady(() => {
  render.go();
});

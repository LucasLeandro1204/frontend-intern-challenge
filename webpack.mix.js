const mix  = require('laravel-mix');
const path = require('path');

const resources = {
  views: 'resources/views/',
  js: 'resources/assets/js/',
  scss: 'resources/assets/sass/',
  images: 'resources/assets/images/',
}

const public = {
  js: 'public/build/js/',
  scss: 'public/build/css/',
  images: 'public/build/images/',
}

mix.disableNotifications();

mix.js(resources.js + 'app.js', public.js);
mix.sass(resources.scss + 'app.scss', public.scss);

mix.copy(resources.images, public.images)
  .copy(resources.views + 'index.html', 'public/');

mix.browserSync('frontend-intern-challenge.dev');

let mix = require('laravel-mix');

require('mix-html-builder');

mix.js('src/app.js', 'dist')
    .sass('src/scss/style.scss', 'dist/style.css')
    .setPublicPath('dist')
    .copy('src/index.html', 'dist')
    .copy('src/assets', 'dist/assets')
    .buildHtml();
# Truck1 US

### This site is bundled via Webpack. 

To make changes, clone the source data from here and type `npm install` at the terminal (Node.JS and NPM should be installed globally).
To run local server for live reload, type `npm run dev` at the terminal. To build the final project, type `npm run build`. The final output will be at the `/dist` folder - you should upload the content of this folder to the hosting FTP.

## Used plugins and libs:

  * `babel` for transpiling ES6 and `async/await` constructions to ES5;
  * `sass` for Sass (the output CSS is integrated into the source-map, not into the CSS file; to modify styles, edit `_file.scss` files, or create your own and don't forget to include them into `index.scss` via `@import 'path/to/file/without/extension'`);
  * `ejs-compiled-loader` to use EJS templates and includes and `html-webpack-plugin` to convert EJS to HTML;
  * `copy-webpack-plugin` to copy all the necessary images into `/dist` folder (there is an issue of working with EJS).



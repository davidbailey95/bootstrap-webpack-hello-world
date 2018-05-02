Bootstrap + Webpack Hello World Tutorial
========================================

Why did I create this?
----------------------

> *If you just want to read the instructions, scroll down to the next header.*

I created this project because I couldn't find any good existing documentation
for how to set-up a Bootstrap 4 project using Webpack 4. I intend to use it as
a reference when I create my own projects in the future, and hope others will
also find it helpful for their projects.

[Bootstrap's official documentation] for using Webpack is very poor since it
doesn't explain all the steps properly, and misses out some steps altogether.
Additionally, it describes the process for Webpack 3, rather than the latest
version, 4.

[Bootstrap's official documentation]: https://getbootstrap.com/docs/4.0/getting-started/webpack/

[Another project] exists which aims to demonstrate how to set-up a simple
Bootstrap + Webpack project, although as with Bootstrap's official documentation
this has some problems - it's outdated, so also uses Webpack 3, and doesn't have
any instructions, only the finished result.

I spent a considerable amount of time trying to figure out how to create a
project, even with access to both of the resources above and others, due to the
changes with newer package versions and lack of detailed information from the
resources.

[Another project]: https://github.com/xdvarpunen/webpackboot

Instructions
------------

1.  Create a new npm project:

    ```sh
    ~/Code $ mkdir bootstrap-webpack-hello-world  # or any other name
    ~/Code $ cd bootstrap-webpack-hello-world
    ~/Code/bootstrap-webpack-hello-world $ npm init
    ```

2.  Install the required development dependencies:

    ```sh
    # Webpack itself
    $ npm install --save-dev webpack webpack-cli

    # Babel (for ES6 to ES5 transpilation and bundling)
    $ npm install --save-dev "@babel-loader@^8.0.0-beta.2" @babel/core @babel/preset-env

    # Stylesheet tools (for SCSS to CSS transpilation and bundling)
    $ npm install --save-dev autoprefixer css-loader node-sass postcss-loader precss sass-loader style-loader

    # HTML Webpack Plugin (for automatic HTML generation)
    $ npm install --save-dev html-webpack-plugin

    # ESLint (for checking JavaScript code style)
    $ npm install --save-dev eslint
    ```

3.  Install the required production dependencies - Bootstrap, jQuery and
    Popper.js:

    ```sh
    $ npm install bootstrap jquery popper
    ```

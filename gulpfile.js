'use strict';

var path = require('path'),
  gulp = require('gulp'),
  webpack = require('webpack'),
  WebpackDevServer = require('webpack-dev-server'),
  gulpWebpackBuild = require('gulp-webpack-build');

var root = './',
  dest = './',
  webpackOptions = {
    // debug: true,
    // devtool: '#source-map',
    watchDelay: 200
  },
  webpackConfig = {
    useMemoryFs: true,
    progress: true
  },
  CONFIG_FILENAME = gulpWebpackBuild.config.CONFIG_FILENAME;

gulp.task('webpack', [], function() {
  return gulp.src(path.join(root, CONFIG_FILENAME), { base: path.resolve(root) })
    .pipe(gulpWebpackBuild.configure(webpackConfig))
    .pipe(gulpWebpackBuild.overrides(webpackOptions))
    .pipe(gulpWebpackBuild.compile())
    .pipe(gulpWebpackBuild.format({
      version: false,
      timings: true
    }))
    .pipe(gulpWebpackBuild.failAfter({
      errors: true,
      warnings: true
    }))
    .pipe(gulp.dest(dest));
});

gulp.task('watch', function() {
  gulp.watch(path.join(root, 'src/**/*.*')).on('change', function(event) {
    if (event.type === 'changed') {
      gulp.src(event.path, { base: path.resolve(root) })
        .pipe(gulpWebpackBuild.closest(CONFIG_FILENAME))
        .pipe(gulpWebpackBuild.configure(webpackConfig))
        .pipe(gulpWebpackBuild.overrides(webpackOptions))
        .pipe(gulpWebpackBuild.watch(function(err, stats) {
          gulp.src(this.path, { base: this.base })
            .pipe(gulpWebpackBuild.proxy(err, stats))
            .pipe(gulpWebpackBuild.format({
              verbose: true,
              version: false
            }))
            .pipe(gulp.dest(dest));
        }));
    }
  });
});

gulp.task("live", function(callback) {

  // Start a webpack-dev-server
  var compiler = webpack(require('./' + CONFIG_FILENAME));

  new WebpackDevServer(compiler, {
    inline: true,
    hot: true,
    color: true,
    contentBase: '.',
    publicPath: '/js/'
  }).listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    //gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

    // keep the server alive or continue?
    // callback();
  });
});

gulp.task('default', ['webpack']);
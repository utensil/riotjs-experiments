# RiotJS Experiments

Try to experiment [RiotJS](https://github.com/muut/riotjs) with my preferred work flows.

## Current Progress

Currently, I've made RiotJS work with:

* [RiotControl](https://github.com/jimsparkman/RiotControl) (An implementation of [Flux](https://github.com/facebook/flux) Architecture Pattern )
* ES6, specifically using [Babel](https://github.com/babel/babel)
* [Jade](https://github.com/jadejs/jade)
* [webpack](https://github.com/webpack/webpack)
* [NPM Scripts](http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool)
* [Less](https://github.com/less/less.js)

And organized directory structure with the following design:

```
├─src                           # Source code
│  ├─client                     #   Source code for client side --- the browser
│  │  ├─assets                  #   Assets: styles, images and fonts
│  │  │  └─less                 #     Style written in Less
│  │  ├─tags                    #     RiotJS tags for UI components written in ES6
│  │  │  ├─*.jade.tag           #       Using Jade as template language
│  │  │  └─*.tag                #       Using Html as template language
│  │  └─...                     #     Control or model written in ES6
│  └─server                     #   Source code for server side --- the backend such as express
├─dist                          # Bundled code for distribution or production usage
│  ├─js
│  ├─css
├─LICENSE
├─README.md
├─package.json
├─webpack.config.js
```

## Plans

* Multi-page app
* Handle images and fonts distribution
* Skeleton generator

## Helpful references

* https://muut.com/riotjs/release-notes.html
* http://www.triplet.fi/blog/tag/riot/

## License

See LICENSE .

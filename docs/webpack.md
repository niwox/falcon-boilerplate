# Webpack

## Loaders
Changes on a single file before adding it to the dependency graph
```js
module.exports = (source) => {
  return applyTransformation(source)
}
```

**Babel**
https://github.com/babel/babel-loader

**CSS**  
css-loader: https://github.com/webpack-contrib/css-loader  
style-loader: https://github.com/webpack-contrib/style-loader


**URL/File**
url-loader: https://github.com/webpack-contrib/url-loader  
file-loader: https://github.com/webpack-contrib/file-loader  
image-webpack-loader: https://github.com/tcoopman/image-webpack-loader  (for compression)  

## Plugins
Changes to multiple files, create bundles, minify ...
```js
class ExamplePlugin {
  apply(compiler) {
    compliler.plugin("run", (compiler, callback) => { // hook to webpack lifecycle
      callback()
    })
  }
}
```
- Uglify js : https://github.com/webpack-contrib/uglifyjs-webpack-plugin


## Review
- `ContextReplacementPlugin`

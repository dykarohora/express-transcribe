const pathRegexp = require('path-to-regexp')

module.exports = Layer

// コンストラクタ関数
function Layer(path, options, fn) {
    if(!(this instanceof Layer)) {
        return new Layer(path, options, fn)
    }

    const opts = options || {}

    this.handle = fn
    this.name = fn.name || '<anonymous>'
    this.params = undefined
    this.path = undefined
    this.regexp = pathRegexp

    this.regexp.fast_start = path === '*'
    this.regexp.fast_slash = path === '/' && opts.end === false
}

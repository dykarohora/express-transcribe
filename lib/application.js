const methods = require('./methods')
const Router = require('./router')

const slice = Array.prototype.slice

const app = exports = module.exports = {}
app.init = function init() {
    // TODO
}

app.set = function set(setting, val) {
    // TODO
}

app.lazyrouter = function lazyrouter() {
    if(!this._router) {
        this._router = new Router({
            // TODO set option
        })

        // TODO setup
    }
}

methods.forEach(function(method){
    // app.METHODの関数を定義
    app[method] = function(path) {
        if(method === 'get' && arguments.length === 1) {
            return this.set(path)
        }

        this.lazyrouter()
        // Routeオブジェクトが戻ってくる
        const route = this._router.route(path)
        // argumentsの第一引数にはpath、第二引数以降にはハンドラがセットされている
        // 引数からpathだけ削って、RouteオブジェクトのRoute.METHODを実行する
        route[method].apply(route, slice.call(arguments, 1))
        return this
    }
})


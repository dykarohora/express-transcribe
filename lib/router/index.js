const Route = require('./route')
const Layer = require('./layer')
const methods = require('../methods')
const setPrototypeOf = require('../setprototypeof')

const proto = module.exports = function (options) {
    const opts = options || {}

    function router(req, res, next) {
        router.handle(req, req, next)
    }

    setPrototypeOf(router, proto)

    router.params = {}
    router.stack = []

    return router
}

proto.handle = function (req, res, next) {

}

/**
 *
 * @param path
 * @return {Route}
 */
proto.route = function route(path) {
    const route = new Route(path)
    const layer = new Layer(path, { /* TODO */ }, route.dispatch.bind(route))
    layer.route = route

    // Routerのスタック(Routeではない)
    this.stack.push(layer)
    return route
}



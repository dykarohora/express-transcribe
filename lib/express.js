
const mixin = require('./merge-descriptors')
const proto = require('./application')

exports = module.exports = createApplication

function createApplication() {
    const app = function(req, res, next) {
        // http.serverのrequestイベントのハンドラになる
    }

    mixin(app, proto, false)

    return app
}

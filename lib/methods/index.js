const http = require('http')

module.exports = getCurrentNodeMethods() || getBasicNodeMethods()

/**
 * nodeのhttpモジュールで定義されているHTTPメソッド名のリストを小文字で返す
 * @return {string[]}
 */
function getCurrentNodeMethods() {
    // http.METHODSがnullかundefinedだったら、戻り値もnullかundefined
    return http.METHODS && http.METHODS.map(method => method.toLowerCase())
}

/**
 * getCurrentNodeMethodsがnull/undefinedを返した場合はこちらのリストを返す
 * @return {string[]}
 */
function getBasicNodeMethods() {
    return [
        'get',
        'post',
        'put',
        'head',
        'delete',
        'options',
        'trace',
        'copy',
        'lock',
        'mkcol',
        'move',
        'purge',
        'propfind',
        'proppatch',
        'unlock',
        'report',
        'mkactivity',
        'checkout',
        'merge',
        'm-search',
        'notify',
        'subscribe',
        'unsubscribe',
        'patch',
        'search',
        'connect'
    ]
}

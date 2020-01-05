const http = require('http')
const methods = require('./index')

describe('methodsのテスト', () => {
    if(http.METHODS) {
        it('httpモジュールのMETHODSリストを小文字で返す', () => {
            expect(methods).toStrictEqual(http.METHODS.map(method => method.toLowerCase()))
        })
    } else {
        it('リストの中にGET、POST、PUT、DELETEが含まれる', () => {
            expect(methods).toContain('get')
            expect(methods).toContain('post')
            expect(methods).toContain('put')
            expect(methods).toContain('delete')
        })
    }
})

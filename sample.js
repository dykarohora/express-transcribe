const express = require('./lib/express')

const app = express()

app.get('/hello', (req, res) => {
    console.log('hello')
})

app.post('/hello' ,(req, res) => {
    console.log('hello post')
})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})

console.log('end')

const Promise = require('bluebird'),
    express = require('express'),
    app = express()

// const MongoStore = require('connect-mongo')

app.use(express.json())

new Promise((resolve, reject) => {
    app.set('port', 3001)
    app.listen(3001, () => {
        console.log('listening')
        resolve()
    })
}).catch((err) => console.error(err))
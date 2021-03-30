var db = require('./dboperations')
var personas = require('./personas')

var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const { request, response } = require('express')
var app = express()
var router = express.Router()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api',router)

router.use((request,response,next)=>{
    console.log('middleware')
    next()
})

router.route('/').get((request,response)=>{
    response.json({message: 'hey im there'});
})






router.route('/getPersonas').get((request,response)=>{

    db.getPersonas().then(result=>{
        response.json(result[0])    
    })
})

var port = process.env.port || 8090
app.listen(port)
console.log('agenda2021 API is running at '+port)


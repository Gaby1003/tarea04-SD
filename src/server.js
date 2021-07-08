const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')
const postService = require('./services/postService.js')
const getService = require('./services/getService.js')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/views/'))

//GET
app.get('/showProducts', (req, res) =>{
    getService.showData(req, res)
});

//POST
app.post('/addProduct', (req,res) =>  {
    postService.addProduct(req, res)
})

app.listen(5000, () => console.log('App run on port 5000!'))
let data = require('../../products.json');

function showData(req, res) {    
    res.send(data)
}

module.exports = {
    showData
}
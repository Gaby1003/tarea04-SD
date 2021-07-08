const fs = require('fs');
let data = require('../../products.json');

function addProduct(req, res) {    
    console.log("req", req.body)
    data.push({"producto": req.body.product, "precio": req.body.price})
    fs.writeFileSync('products.json', JSON.stringify(data))
}

module.exports = {
    addProduct
}
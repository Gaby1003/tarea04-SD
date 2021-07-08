function showProducts() {  
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           
            var table = document.createElement("table");
            table.classList.add("table");
            table.style.cssText = "align-items: center; "  
            
            const datas = JSON.parse(xhttp.responseText)
            var head = document.createElement("thead");

            var productHead = document.createElement("tr");    
            productHead.style.cssText = "float: center;  "      
            
            var nameHead = document.createElement("th");
            nameHead.innerHTML = "Producto"
            nameHead.classList.add("h4")
            nameHead.style.cssText = "  ";
            document.body.appendChild(nameHead)

            var priceHead = document.createElement("th");
            priceHead.innerHTML = "Precio"
            priceHead.classList.add("h4")
            document.body.appendChild(priceHead)

            document.body.appendChild(productHead)
            document.body.appendChild(head)

            var body = document.createElement("tbody");
            for (let index = 0; index < datas.length; index++) {
                var product = document.createElement("tr");

                var name = document.createElement("th");
                name.innerHTML = datas[index].producto
                name.classList.add("table-light")
                name.classList.add("lead")
                name.classList.add("small")        
                document.body.appendChild(name)

                var price = document.createElement("th");
                price.innerHTML = datas[index].precio
                price.classList.add("table-light")
                price.classList.add("lead")
                price.classList.add("small")
                document.body.appendChild(price)

                document.body.appendChild(product)    
            }
            document.body.appendChild(body)
            document.body.appendChild(table)
        }
    };
    xhttp.open("GET", "http://localhost:5000/showProducts", true);
    xhttp.send();
}

function addProducts() {  
    var xhttp = new XMLHttpRequest();
    var formData = new FormData();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            formData = document.getElementById("datas");  
            xhttp.send();
        }
    };
    xhttp.open("POST", "http://localhost:5000/addProduct", true);
}





fetch("http://127.0.0.1:5500/product.json")
    .then(response => response.json())
    .then(data => {
        product_showing(data)
    })

let product_container = document.getElementById("product-container");
let cart = document.getElementById("cart");

var order_list = []

let order = []



function product_showing(product) {
    console.log(product.length)
    let product_box = document.getElementById("product-box");
    let row_box = document.createElement("div");


    // product_box.style.display = "flex";
    // product_box.style.flexDirection = "column";
    // product_box.style.justifyContent = "center";
    // product_box.style.flexWrap = "wrap"
    // // product_box.style.height = "200%"
    // // product_box.style.width = "100%"


    for (let i = 0; i < product.length; i++) {
        let box = document.createElement("div");

        let box_product = document.createElement("div");
        let box_btn = document.createElement("div");
        let box_img = document.createElement("div")
        let img = document.createElement("img");
        let btn = document.createElement("button");
        let price = document.createElement("div");
        let product_name = document.createElement("div");
        let product_detail = document.createElement("div");

        btn.setAttribute("id", "order")

        box.style.backgroundColor = "transparent";
        box.style.border = "1px solid #929292";
        box.style.display = "flex";
        box.style.flexDirection = "column"
        box.style.width = "250px";
        box.style.height = "250px";
        box.style.margin = "20px";
        box.style.borderRadius = "5px"







        box_img.style.borderBottom = "1px solid #F78812";
        box_img.style.height = "70%";
        box_img.style.textAlign = "center";

        box_product.style.height = "15%";
        box_product.style.display = "flex";
        box_product.style.flexDirection = "row";
        box_product.style.alignItems = "center";




        box_btn.style.height = "15%";
        box_btn.style.display = "flex";
        box_btn.style.flexDirection = "row";
        box_btn.style.alignItems = "center";

        btn.style.border = "transparent";
        btn.style.backgroundColor = "#4B55D6";
        btn.style.color = "#FFFFFF";
        btn.style.borderRadius = "5px";
        btn.style.height = "30px";
        btn.style.width = "60px";
        btn.style.fontSize = "12px";

        price.style.width = "45%";
        price.style.marginLeft = "5px";

        product_name.style.color = "#4B55D6";
        product_name.style.width = "45%";
        product_name.style.marginLeft = "5px";

        product_detail.style.width = "45%";

        img.style.height = "150px";


        row_box.style.display = "flex";
        row_box.style.flexDirection = "column";
        row_box.style.justifyContent = "center";
        row_box.style.flexWrap = "wrap"
        row_box.style.width = "100%"

        // col_box.style.display = "flex";
        // col_box.style.flexDirection = "row";

        btn.onclick = function () {
            order_list.push(product[i]);
            console.log("order: ", order_list)
            // cart.addEventListener("click",)          
        }




        img.src = product[i].image;
        box_img.appendChild(img);
        product_name.appendChild(document.createTextNode(product[i].name));
        product_detail.appendChild(document.createTextNode("Color: " + product[i].color));
        box_product.appendChild(product_name);
        box_product.appendChild(product_detail);
        price.appendChild(document.createTextNode(product[i].price));
        btn.appendChild(document.createTextNode("Order"));
        box_btn.appendChild(price);
        box_btn.appendChild(btn);

        box.appendChild(box_img);
        box.appendChild(box_product);
        box.appendChild(box_btn);

        product_box.appendChild(box)


    }
    list_order_name()

    // product_box.appendChild(row_box)

}



console.log("order: ", order_list)

function get_order(order_list) {
    order = order_list
    console.log("order: ", order_list)
    return order
}


let states = "close"
let option = document.createElement("option")

cart.addEventListener("click", event => {
    console.log("or: ", order_list)
    console.log("len: ", order_list.length)
    // let selection = document.createElement("selection")
    let box = document.createElement("div")

    // selection.style.width = "300px"
    // selection.style.backgroundColor = "transparent"
    // selection.style.border = "1px solid #000000"
    // selection.style.display = "flex"


    option.style.width = "100%"
    option.style.display = "flex"
    option.style.flexDirection = "column"
    option.style.backgroundColor = "#FFFFFF"
    option.style.border = "1px solid #000000"



    let toggle = cart.classList.toggle("close")
    console.log("toggle: ", toggle)

    if (toggle == true) {
        console.log("state: ", states)
        option = document.createElement("div")
        if (order_list.length > 0) {
            let height_order = 100 / order_list

            box.style.width = "200px"



            console.log("test")
            for (let i = 0; i < order_list.length; i++) {
                let name = document.createElement("div")
                let price = document.createElement("div")
                let box_product = document.createElement("div")

                box_product.style.borderBottom = "1px solid #D7D7D7"
                box_product.style.backgroundColor = "#FFFFFF"
                box_product.style.height = "50px"
                box_product.style.display = "flex"
                box_product.style.alignItems = "center"
                

                name.style.color = "#000000";
                name.style.fontSize = "14px"
                name.style.width = "70%";
                name.style.marginLeft = "5px"

                price.style.color = "#000000";
                price.style.fontSize = "14px"
                price.style.width = "70%";


                box_product.style.display = "flex"
                box_product.style.flexDirection = "row"

                name.appendChild(document.createTextNode(order_list[i].name));
                price.appendChild(document.createTextNode(order_list[i].price));

                box_product.appendChild(name)
                box_product.appendChild(price)
                box.appendChild(box_product)
            }
            option.appendChild(box)
            // selection.appendChild(option)
            cart.appendChild(option)
            // console.log(selection)

        }
        // states = "open"
    }
    if (toggle == false) {
        cart.removeChild(option)
        // console.log("state: ",cart.)
        states = "close"
    }
    // console.log("state-out: ",states)


})




function list_order_name() {
    if (order_list > 0) {
        console.log("test:", order_list)
        let selection = document.createElement("selection")
        let option = document.createElement("option")


    }
}






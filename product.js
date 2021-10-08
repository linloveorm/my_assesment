

fetch("http://127.0.0.1:5500/product.json")
    .then(response => response.json())
    .then(data => {
        product_showing(data)
    })

let product_container = document.getElementById("product-container");

let screen_height = window.screen.height
let screen_width = window.screen.width



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

        console.log("i: ", i)
        // console.log("item_index: ", item_index)
        let box = document.createElement("div");

        let box_product = document.createElement("div");
        let box_btn = document.createElement("div");
        let box_img = document.createElement("div")
        let img = document.createElement("img");
        let btn = document.createElement("button");
        let price = document.createElement("div");
        let product_name = document.createElement("div");
        let product_detail = document.createElement("div");

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
        box_img.style.textAlign ="center";

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
        product_name.style.width ="45%";
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
    // product_box.appendChild(row_box)

}

function set_box() {

}

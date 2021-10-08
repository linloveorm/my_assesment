

fetch("http://127.0.0.1:5500/product.json")
    .then(response => response.json())
    .then(data => {
        product_showing(data)
    })

let product_container = document.getElementById("product-container");
let box = document.createElement("div");
let box_product = document.createElement("div");
let product_name = document.createElement("div");
let product_detail = document.createElement("div");
let box_img = document.createElement("div")
let img = document.createElement("img");
let btn = document.createElement("button");
let price = document.createElement("div");


box.style.backgroundColor = "transparent";
box.style.border = "1px solid #929292";
box.style.display = "flex";
box.style.width = "80%";


box_img.style.borderBottom= "1px solid #F78812";
box_img.style.height = "70%";

box_product.style.height = "15%";

btn.style.border= "transparent";
btn.style.backgroundColor = "#4B55D6";
btn.style.color = "#FFFFFF";
btn.style.borderRadius= "10px";
btn.style.height = "40px";
btn.style.width = "80px";

product_name.style.color = "#4B55D6";




function product_showing(product){
    console.log(product.length)
    btn.appendChild(document.createTextNode("Order"))
    product_container.appendChild(btn)
    for(let i = 0; i < product.length;i++){        
        
    }    

}

function set_box(){
    
}

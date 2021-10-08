

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


    for (let i = 0; i < product.length; i++) {

        console.log("i: ", i)
        console.log("item_index: ", item_index)
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
        box.style.width = "80%";


        box_img.style.borderBottom = "1px solid #F78812";
        box_img.style.height = "70%";

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
        btn.style.borderRadius = "10px";
        btn.style.height = "40px";
        btn.style.width = "80px";

        product_name.style.color = "#4B55D6";

        img.style.height = "150px"


        product_box.style.display = "flex";
        product_box.style.flexDirection = "column";
        product_box.style.justifyContent = "center";

        col_box.style.display = "flex";
        col_box.style.flexDirection = "row";





        img.src = product[item_index].image;
        box_img.appendChild(img);
        product_name.appendChild(document.createTextNode(product[item_index].name));
        product_detail.appendChild(document.createTextNode("Color: " + product[item_index].color));
        box_product.appendChild(product_name);
        box_product.appendChild(product_detail);
        price.appendChild(document.createTextNode(product[item_index].price));
        btn.appendChild(document.createTextNode("Order"));
        box_btn.appendChild(price);
        box_btn.appendChild(btn);

        box.appendChild(box_img);
        box.appendChild(box_product);
        box.appendChild(box_btn);

        product_box.appendChild(box)


    }





    if (screen_width >= 1920 && screen_height >= 1080) {
        let items_in_row = 4;
        let row_num = Math.ceil(product.length / items_in_row);
        let product_box = document.getElementById("product-box");
        let row = document.createElement("div");
        let col_box = document.createElement("div");
        let item_index = 0;
        let list_box = [];
        let i = 0;

        while (i < row_num) {
            let item_box = document.createElement("div");
            while (item_index < items_in_row * i) {
                if (item_index > product.length) {
                    i = 0
                    break;
                }

                console.log("i: ", i)
                console.log("item_index: ", item_index)
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
                box.style.width = "80%";


                box_img.style.borderBottom = "1px solid #F78812";
                box_img.style.height = "70%";

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
                btn.style.borderRadius = "10px";
                btn.style.height = "40px";
                btn.style.width = "80px";

                product_name.style.color = "#4B55D6";

                img.style.height = "150px"


                product_box.style.display = "flex";
                product_box.style.flexDirection = "column";
                product_box.style.justifyContent = "center";

                col_box.style.display = "flex";
                col_box.style.flexDirection = "row";





                img.src = product[item_index].image;
                box_img.appendChild(img);
                product_name.appendChild(document.createTextNode(product[item_index].name));
                product_detail.appendChild(document.createTextNode("Color: " + product[item_index].color));
                box_product.appendChild(product_name);
                box_product.appendChild(product_detail);
                price.appendChild(document.createTextNode(product[item_index].price));
                btn.appendChild(document.createTextNode("Order"));
                box_btn.appendChild(price);
                box_btn.appendChild(btn);

                box.appendChild(box_img);
                box.appendChild(box_product);
                box.appendChild(box_btn);

                // list_box.concat(box)
                item_box.appendChild(box)

            }
            i += 1;
            col_box.appendChild(item_box)
        }





        console.log("row: ", row)
        // for (let i = 0; i < product.length; i++) {

        //     for (let j = 0; j < row_num; j++) {

        //         col_box = document.createElement("div");
        //         console.log(j)
        //         let box = document.createElement("div");
        //         let box_product = document.createElement("div");
        //         let box_btn = document.createElement("div");
        //         let box_img = document.createElement("div")
        //         let img = document.createElement("img");
        //         let btn = document.createElement("button");
        //         let price = document.createElement("div");
        //         let product_name = document.createElement("div");
        //         let product_detail = document.createElement("div");

        //         box.style.backgroundColor = "transparent";
        //         box.style.border = "1px solid #929292";
        //         box.style.display = "flex";
        //         box.style.flexDirection = "column"
        //         box.style.width = "80%";


        //         box_img.style.borderBottom = "1px solid #F78812";
        //         box_img.style.height = "70%";

        //         box_product.style.height = "15%";
        //         box_product.style.display = "flex";
        //         box_product.style.flexDirection = "row";
        //         box_product.style.alignItems = "center";



        //         box_btn.style.height = "15%";
        //         box_btn.style.display = "flex";
        //         box_btn.style.flexDirection = "row";
        //         box_btn.style.alignItems = "center";

        //         btn.style.border = "transparent";
        //         btn.style.backgroundColor = "#4B55D6";
        //         btn.style.color = "#FFFFFF";
        //         btn.style.borderRadius = "10px";
        //         btn.style.height = "40px";
        //         btn.style.width = "80px";

        //         product_name.style.color = "#4B55D6";

        //         img.style.height = "150px"


        //         product_box.style.display = "flex";
        //         product_box.style.flexDirection = "column";
        //         product_box.style.justifyContent = "center";

        //         col_box.style.display = "flex";
        //         col_box.style.flexDirection = "row";





        //         img.src = product[item_index].image;
        //         box_img.appendChild(img);
        //         product_name.appendChild(document.createTextNode(product[item_index].name));
        //         product_detail.appendChild(document.createTextNode("Color: " + product[item_index].color));
        //         box_product.appendChild(product_name);
        //         box_product.appendChild(product_detail);
        //         price.appendChild(document.createTextNode(product[item_index].price));
        //         btn.appendChild(document.createTextNode("Order"));
        //         box_btn.appendChild(price);
        //         box_btn.appendChild(btn);

        //         box.appendChild(box_img);
        //         box.appendChild(box_product);
        //         box.appendChild(box_btn);

        //         // list_box.concat(box)
        //         col_box.appendChild(box)
        //     }
        //     row.appendChild(col_box)
        //     // col_box.innerHTML = ""
        // }
        // product_box.appendChild(row)
    }




    // for (let i = 0; i < product.length; i++) {
    //     let product_box = document.getElementById("product-box");
    //     let box = document.createElement("div");
    //     let box_product = document.createElement("div");
    //     let box_btn = document.createElement("div");
    //     let box_img = document.createElement("div")
    //     let img = document.createElement("img");
    //     let btn = document.createElement("button");
    //     let price = document.createElement("div");
    //     let product_name = document.createElement("div");
    //     let product_detail = document.createElement("div");

    //     box.style.backgroundColor = "transparent";
    //     box.style.border = "1px solid #929292";
    //     box.style.display = "flex";
    //     box.style.flexDirection = "column"
    //     box.style.width = "80%";


    //     box_img.style.borderBottom = "1px solid #F78812";
    //     box_img.style.height = "70%";

    //     box_product.style.height = "15%";
    //     box_product.style.display = "flex";
    //     box_product.style.flexDirection = "row";
    //     box_product.style.alignItems = "center";



    //     box_btn.style.height = "15%";
    //     box_btn.style.display = "flex";
    //     box_btn.style.flexDirection = "row";
    //     box_btn.style.alignItems = "center";

    //     btn.style.border = "transparent";
    //     btn.style.backgroundColor = "#4B55D6";
    //     btn.style.color = "#FFFFFF";
    //     btn.style.borderRadius = "10px";
    //     btn.style.height = "40px";
    //     btn.style.width = "80px";

    //     product_name.style.color = "#4B55D6";

    //     img.style.height = "150px"


    //     product_box.style.display = "flex";
    //     product_box.style.flexDirection = "column";
    //     product_box.style.justifyContent = "center";;
    //     img.src = product[item_index].image;
    //     box_img.appendChild(img);
    //     product_name.appendChild(document.createTextNode(product[item_index].name));
    //     product_detail.appendChild(document.createTextNode("Color: " + product[item_index].color));
    //     box_product.appendChild(product_name);
    //     box_product.appendChild(product_detail);
    //     price.appendChild(document.createTextNode(product[item_index].price));
    //     btn.appendChild(document.createTextNode("Order"));
    //     box_btn.appendChild(price);
    //     box_btn.appendChild(btn);

    //     box.appendChild(box_img);
    //     box.appendChild(box_product);
    //     box.appendChild(box_btn);

    //     product_box.appendChild(box)



    // }

}

function set_box() {

}

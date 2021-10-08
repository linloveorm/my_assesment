// import carousel_1 = "./product_img/zfold3_carousel_mainsinglekv_pc.webp";
// import carousel_2 from "./product_img/zfold3_carousel_productimage_phantomgreen_pc.webp";
// import carousel_3 from "./product_img/zfold3_carousel_productimage_phantomsilver_pc.webp";
// let list = []
// let carousel_1 = image(src = "./product_img/zfold3_carousel_mainsinglekv_pc.webp");
// let carousel_2 = image(src = "./product_img/zfold3_carousel_productimage_phantomgreen_pc.webp");
// let carousel_3 = image(src = "./product_img/zfold3_carousel_productimage_phantomsilver_pc.webp");
let carousel_list = [
    {
        "src" : "'"+"./product_img/zfold3_carousel_mainsinglekv_pc.webp"+"'"
    },
    {
        "src" : "'"+"./product_img/zfold3_carousel_productimage_phantomgreen_pc.webp"+"'"
    },
    {
        "src" : "'"+"./product_img/zfold3_carousel_productimage_phantomsilver_pc.webp"+"'"
    }
]

let carousel = document.getElementById("carousel");
let carousel_left = document.getElementById("carousel-left")
let carousel_right = document.getElementById("carousel-right")
let carousel_buynow = document.getElementById("carousel-buynow")
let num = 0

carousel_left.addEventListener("click", event => {
    num -= 1 
    if(num < 0){
        num = 2
    }
    // debugger;
    carousel_move(num);
    // console.log(num);
})
carousel_right.addEventListener("click", event => {
    num += 1
    if(num == carousel_list.length){
        num = 0
    }
    // console.log(num);
    // debugger;
    carousel_move(num);
    // console.log(num);
})
function carousel_move(num) {
    // console.log("Carousel move: ",num)
    // console.log("Carousel list: ",carousel_list.length)
    // const carousel_list = [carousel_1, carousel_2, carousel_3];

    if(num < carousel_list.length && num >= 0){
        if(num == 0){
            console.log("carousel_list[num].src: ",carousel_list[num].src)
            background_image(carousel_list[num].src);
            // return num
        }
        else if(num == 1){
            console.log("carousel_list[num].src: ",carousel_list[num].src)
            background_image(carousel_list[num].src);
            // return num
        }
        else if(num == 2){
            console.log("carousel_list[num].src: ",carousel_list[num].src)
            background_image(carousel_list[num].src);
            // return num
        }
    }

}

function background_image(image) {
    carousel.style.backgroundImage = "url("+image+")";
}

carousel_move(0)




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
    carousel_move(num);
})
carousel_right.addEventListener("click", event => {
    num += 1
    if(num == carousel_list.length){
        num = 0
    }
    carousel_move(num);
})
function carousel_move(num) {
    
    if(num < carousel_list.length && num >= 0){
        if(num == 0){
            background_image(carousel_list[num].src);
        }
        else if(num == 1){
            background_image(carousel_list[num].src);
        }
        else if(num == 2){
            background_image(carousel_list[num].src);
        }
    }

}

function background_image(image) {
    carousel.style.backgroundImage = "url("+image+")";
}

carousel_move(0)
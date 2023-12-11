// cart
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#close-cart");
// open cart
cartIcon.addEventListener("click" , ()=>{
    cart.classList.add("active")
})
// close cart
closeCart.addEventListener("click" , ()=>{
    cart.classList.remove("active")
})

// cart working js
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded" , ready);
} else {
    ready();
}
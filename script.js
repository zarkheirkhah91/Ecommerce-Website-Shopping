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
// making function
function ready(){
    // remove item from cart
    const removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(let i = 0; i < removeCartButtons.length; i++){
        let button = removeCartButtons[i]
        button.addEventListener("click" , removeCartItem)
    }
    // quantity changes
    let quantityInputs = document.getElementsByClassName("cart-quantity")
    for (let i = 0 ; i<quantityInputs.length; i++) {
        let input = quantityInputs[i]
        input.addEventListener("change" , quantityChanged);
    }
    // add to cart
    let addCart = document.getElementsByClassName("bagIcon")
    for(let i=0; i<addCart.length; i++) {
        let button = addCart[i];
        button.addEventListener("click" , addCartClicked);
    }
}
// remove items from cart
function removeCartItem (event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();
}
// quantity changes
function quantityChanged(event) {
    let input = event.target
    if(isNaN(input.value) || input.value <=0) {
        input.value = 1;
    }
    updatetotal();
}

// update total
function updatetotal() {
    let cartContent = document.getElementsByClassName("cart-content")[0];
    let cartBoxes = document.getElementsByClassName("cart-box");
    let total = 0;
    for(let i = 0; i < cartBoxes.length; i++) {
        let cartBox = cartBoxes[i];
            let priceElement = cartBox.getElementsByClassName("cart-price")[0];
            let quantityElement =  cartBox.getElementsByClassName("cart-quantity") [0];
            let price = parseFloat(priceElement.innerText.replace("$",""));
            let quantity = quantityElement.value
            total = total + (price * quantity);
        // if price contain some  cents value
        total = Math.round(total*100)/100 ;

            document.getElementsByClassName("total-price") [0].innerText = "$" + total;
        }
    }












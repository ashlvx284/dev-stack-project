let cart = [];
function addToCart(name){
    if(!cart.includes(name)) {
        cart.push(name);
        updateCartUI();
    }
}

function removeFromCart(index) {
    cart.splice(index,1);
    updateCartUI();
}

function updateCartUI(){
    const cartList= document.getElementById('cart-list');
    const emptyMsg= document.getElementById('empty-msg');


if(cart.length===0){
    emptyMsg.style.display= 'block';
    cartList.innerHTML='';
}

else{
    emptyMsg.style.display= 'none';


    cartList.innerHTML= cart.map((item,index) =>`<li style="display: flex;justify-content:space-between;margin-bottom: 8px;">
    <span>${item}</span>
    <button onclick="removeFromCart(${index})" style="background:red;padding: 2px 6px;">X</button      
    </li>`).join('');                             

}
}
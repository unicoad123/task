const open=document.getElementById('cart-hldr');
const close=document.getElementById('close');
const popup=document.getElementById('cart');

const cartdetail=document.getElementById('cart-details');
const contaier=document.getElementById("E-Commerce");

open.addEventListener("click",()=>
{
   popup.classList.add('active')
})
close.addEventListener("click",()=>
{
    popup.classList.remove('active');
})

contaier.addEventListener('click',(e)=>
{
    if (e.target.className=='butn'){
        const id = e.target.parentNode.parentNode.id
        alert(id);
        const name = document.querySelector(`#${id} h1`).innerText;
        alert(name);
        const img_src = document.querySelector(`#${id} img`).src;
        const price = e.target.parentNode.firstElementChild.innerText;
        alert(price);

        var image=document.createElement('img');
        image.setAttribute("class","img1");
        image.src=img_src;
        cartdetail.appendChild(image);
        
        var inpt=document.createElement('h4');
        inpt.innerText=price
        inpt.setAttribute("class","input1");
        cartdetail.appendChild(inpt);

        alert("Added To Cart Successfully");

    }
})

window.addEventListener(`DOMContentLoaded`,() => {
    axios.get(`http://localhost:3000/products`).then(response => {
        console.log("response",response);
        let products=response.data.products
        console.log(products);
        for (const product of products) {
            if (product.category==`album`) {
         
        
            let div=document.createElement(`div`)
                div.innerHTML= `<div class="album" id="${product.id-1}">
                <h1>${product.title}</h1>
                <div class="imgContainer">
                    <img src="${product.imageUrl}" alt="" srcset="">
                </div>
                
                <div class="details">
                    <div class="priceDetails" ><span>$</span><p>${product.price}</p></div>
                    <button onClick="addToCart(${product.id-1})" id="${product.id-1}" class="priceBtn">ADD TO CART</button>
                </div>
                </div>`
        albums.appendChild(div)

            }else if(product.category==`merch`){
                let div=document.createElement(`div`)
                div.innerHTML= `<div class="album" id="${product.id-1}">
                <h1>${product.title}</h1>
                <div class="imgContainer">
                    <img src="${product.imageUrl}" alt="" srcset="">
                </div>
                
                <div class="details">
                    <div class="priceDetails" ><span>$</span><p>${product.price}</p></div>
                    <button id="${product.id-1}" class="priceBtn">ADD TO CART</button>
                </div>
                </div>`
                merch.appendChild(div)
            }
    
        }
        musicSection.addEventListener('click',(e) => {
    
            if (e.target.innerHTML===`ADD TO CART`) {
                id=e.target.id
                console.log(id);
                console.log(document.querySelector(`#cart${id}`));
                if (document.querySelector(`#cart${id}`)) {
                    alert(`item is already in the cart!!!`)
                    return
                }
                notification.classList.add(`active`)
                setTimeout(() => {
                    notification.classList.remove(`active`)
                }, 2000);
                notification.innerHTML=`<h3>Your product: ${products[id].title} is added to cart</h3>`
                countItem++
                count.innerHTML=`${countItem}`
                let div = document.createElement('div')
                div.innerHTML=` 
                <div id="cart${products[id].id-1}" class="item">
                <span  class="itemTopic"><img src=${products[id].imageUrl} alt=""><span>${products[id].title}</span></span>
                <span  class="priceTopic">${products[id].price}</span>
                <span  class="quantityTopic"><input value="1" type="text" name="" id=""><button class="removeBtn">REMOVE</button></span>
                </div>`
                cartItems.appendChild(div)
                
                totalPriceTag.innerHTML=parseFloat(totalPriceTag.innerHTML)+parseFloat(products[id].price)
            }
        
        })

       function addToCart(productId) {
    console.log(productId);
    axios.post(`http://localhost:3000/cart`,{productId:productId})
    .then(response => {
        console.log(response);
    }).catch(error => {console.log(error);})
}
function getCartDetails() {
    axios.get(`http://localhost:3000/cart`)
    .then((response)=>{
        console.log(response);
    }).catch((error)=>{console.log(error);})
}

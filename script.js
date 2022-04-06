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




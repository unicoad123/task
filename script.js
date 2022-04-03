const open=document.getElementById('btn');
const close=document.getElementById('close');
const popup=document.getElementById('container');

open.addEventListener("click",()=>
{
   popup.classList.add('active');
})
close.addEventListener("click",()=>
{
    popup.classList.remove('active');
})
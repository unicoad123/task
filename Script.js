var header=document.getElementById('header-title');
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
items[1].textContent='Hello';
items[1].style.fontWeight='bold';
items[1].style.fontColor='green';
items[4].textContent='LastItem';
for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='#ccc';
}

-----------------------GetElementByClassName---------------------------
var li=document.getElementByClassName('list');
console.log(items);
console.log(items[1]);
items[1].textContent='Hello';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='green';
items[4].textContent='LastItem';
for(var i=0;i<item.length;i++)
{
    items[i].style.backgroundColor='#f4f4f4';
}

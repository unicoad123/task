var header=document.getElementById('header-title');
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
items[1].textContent='Hello';
items[1].style.fontWeight='bold';
items[1].style.fontColor='green';

for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor='#ccc';
}
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
------Query Selector---------------------------------
var item=document.querySelector('#list:nthchild(2)');
item.style.backgroundColor='green';

var item=document.querySelectorAll('#list:nthchild(3)');
item.style.visibility='hidden';

----------------Query SelectorAll------------------------
var item=document.querySelector('#list');
items[2].style.color='green';

var odd=document.querySelector('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
}

diff b/w queryselector and queryselectorall:
querySelector() returns a single object with the first HTML element that matches the selectors
querySelectorAll() returns an array of objects with all the HTML elements that match the selectors


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
----------------------Manipulating DOM-----------------
var item=document.querySelector('#items');
console.log(item.parentnode);
item.parentnode.style.backgroundColor='#ccc';

var item=document.querySelector('#items');
console.log(item.parentElement);
item.parentElement.style.backgroundColor='#ccc';

var item=document.querySelector('#items');
console.log(item.firstElementChild);
item.firstElementChild.style.backgroundColor='#ccc';

var item=document.querySelector('#items');
console.log(item.lastChild);
item.lastChild.style.backgroundColor='#ccc';

var item=document.querySelector('#items');
console.log(item.firstChild);
item.firstChild.style.backgroundColor='#ccc';

var item=document.querySelector('#items');
console.log(item.lastElementChild);
item.lastElementChild.style.backgroundColor='#ccc';

var item=document.querySelector('#items');
console.log(item.nextSibling);
item.nextSibling.style.backgroundColor='#ccc';

var item=document.querySelector('#items');
console.log(item.nextElementSibling);
item.nextElementSibling.style.backgroundColor='#ccc';

var item=document.querySelector('#items');
console.log(item.previousSibling);
item.previousSibling.style.backgroundColor='#ccc';

var item=document.querySelector('#items');
console.log(item.previousElementSibling);
item.previousElementSibling.style.backgroundColor='#ccc';

var ndiv=document.createElement('div');
ndiv.classname='Hello';
ndiv.setAttribute('title','hello');
var ndivtext=document.createTextNode('Hello');
ndiv.appendChild('ndivtext);
console.log(ndiv);
         
-------delete and edit------------------

  itemList.appendChild(li);
  var editBtn = document.createElement('button');
  editBtn.className = 'float-left edit';
  editBtn.appendChild(document.createTextNode('Edit'));
  li.appendChild(editBtn);
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}





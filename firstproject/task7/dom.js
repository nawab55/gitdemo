// QUERYSELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = '4px solid #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello world';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.color = 'coral';
// secondItem.style.backgroundColor = 'green';
// thirdItem.style.display = 'none';

// QUERYSELECTORALL
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var fontColorChange = document.querySelectorAll('li');
// fontColorChange[1].style.color = 'green';
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i<odd.length; i++){
    // odd[i].style.backgroundColor = 'green';
//     even[i].style.backgroundColor = '#f4f4f4';
// }

// TRAVERSING THE DOM
var itemlist = document.querySelector('#items');
// parentNode
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// console.log(itemlist.children[1]);
// itemlist.children[1].style.backgroundColor = 'yellow';

// firstChild
// console.log(itemlist.firstChild);

// firstElementChild
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent = 'Hello 1';

// lastChild
// console.log(itemlist.lastChild);

// lastElementChild
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent = 'Hello 4';

// nextSibling
// console.log(itemlist.nextSibling);
// nextElementSibling
// console.log(itemlist.nextElementSibling);

// previousSibling
// console.log(itemlist.previousSibling);
// previousElementSibling
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.style.color = 'green';

// createElement
var newDiv = document.createElement('div');
// Add class 
newDiv.className = 'Hello';
// Add id
newDiv.id = 'hello1';
// Add attr
newDiv.setAttribute('title', 'Hello div');

// create text node
var newDivText = document.createTextNode('Hello world');
// Add text to div
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);

// createElement
var newLi = document.createElement('li');
// Add class 
newLi.className = "list-group-item";
// Add id
newLi.id = 'newli1';

// create text li node
var newLiText = document.createTextNode('Hello world');
// Add text to li
newLi.appendChild(newLiText);
console.log(newLi);
var newLitag = document.querySelector('.list-group');
var li = document.querySelector('#l1');
newLitag.insertBefore(newLi, li);

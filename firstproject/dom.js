//  EXAMINE THE DOCUMENT OBJECT 

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);
// console.log(document.images); 

// GET ELEMENT BY ID

// console.log(document.getElementById('header-title'));

let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
console.log(headerTitle.textContent);
console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = '3px solid #000';


// GETELEMENTSBYCLASSNAME
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello2';
items[1].style.fontWeight = 'bold';
items[1].style.color = 'green';


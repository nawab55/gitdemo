// GETELEMENTSBYCLASSNAME
// let items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello2';
// items[1].style.fontWeight = 'bold';
// items[1].style.color = 'green';

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

var odd = document.querySelectorAll('li:nth-child(odd)');
var fontColorChange = document.querySelectorAll('li');
fontColorChange[1].style.color = 'green';
// var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
//     even[i].style.backgroundColor = '#f4f4f4';
}

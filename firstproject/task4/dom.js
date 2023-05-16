// GETELEMENTSBYCLASSNAME
let items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
// items[1].textContent = 'Hello2';
// items[1].style.fontWeight = 'bold';
// items[2].style.fontWeight = 'bold';

items[1].style.color = 'yellow';
items[2].style.backgroundColor = 'green';

for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}



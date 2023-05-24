// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
  // Retrieving data
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
//   console.log(uname);
//   console.log(uemail);

  // Storing data
//   const user = localStorage.setItem('uname', uname);
//   const email = localStorage.setItem('uemail', uemail);
    const obj = {
        name,
        email
    }
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    
    // create a input button
  const deleteButton = document.createElement('input');
  deleteButton.id = 'button';
  // deleteButton.setAttribute('type', "button");
  // btn.setAttribute('value', "Delete");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.onclick = () => {
    localStorage.removeItem(obj.email);
    userList.removeChild(li);
  }
  li.appendChild(deleteButton);
  // Append to ul
  userList.appendChild(li);

  

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
}
// const btnSelect = document.querySelector('#button');
//   btnSelect.addEventListener('onclick', deleteUser);
//   function deleteUser(){
    
//     localStorage.removeItem('obj.email');
//   }
  // btn.onclick = function(){
  //   localStorage.removeItem(obj.email);
  // }

  

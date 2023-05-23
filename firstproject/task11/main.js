// USER FORM SCRIPT

// Put DOM elements into variables
 const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  // Retrieving data
  let uname = document.querySelector('#name').value;
  let uemail = document.querySelector('#email').value;
//   console.log(uname);
//   console.log(uemail);

// creat user Array and stored data in it.
let userRecords = new Array();
userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]; 
//above write because first time json application used otherwise userRecords = JSON.parse(localStorage.getItem("users"));

userRecords.push({
    "name":uname,
    "email":uemail
})

  // Storing data
  localStorage.setItem('users',JSON.stringify(userRecords));
//   const email = localStorage.setItem('uemail', uemail);

//   Retrieving stored data and using it for calculation
    const usrName = localStorage.getItem('uname', uname);
    const usrEmail = localStorage.getItem('uemail', uemail);
    // console.log(usrName);

  
//   if(nameInput.value === '' || emailInput.value === '') {
//     // alert('Please enter all fields');
//      msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     // Create new list item with user
//     const li = document.createElement('li');

//     // Add text node with input values
//     li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

//     // Add HTML
//     // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

//     // Append to ul
//     userList.appendChild(li);

//     // Clear fields
//     nameInput.value = '';
//     emailInput.value = '';
//   }
}
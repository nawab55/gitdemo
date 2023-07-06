// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const amount = document.querySelector('#amount');
const description = document.querySelector('#description');
const category = document.querySelector('#category');
const userList = document.querySelector('#users');
const addExpenseButton = document.querySelector('#btn');

// Listen for form submit
addExpenseButton.addEventListener('click', onSubmit);

function onSubmit(e) {
    e.preventDefault();
  // Retrieving data
    const amnt = document.querySelector('#amount').value;
    const descrpn = document.querySelector('#description').value;
    const ctgry = document.querySelector('#category').value;
  console.log(amnt);
//   console.log(ctgry);

  // Storing data
//   const user = localStorage.setItem('name', name);
//   const email = localStorage.setItem('email', email);
    const obj = {
        amnt,
        descrpn,
        ctgry
    }
    localStorage.setItem(obj.ctgry, JSON.stringify(obj));
    showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${amount.value}: ${description.value}: ${category.value}`));
    
    // create a delete "input button"
  const deleteButton = document.createElement('input');
  deleteButton.id = 'button';
  // deleteButton.setAttribute('type', "button");
  // btn.setAttribute('value', "Delete");
  deleteButton.type = "button";
  deleteButton.value = "Delete Expense";
  deleteButton.class = "btn";

  deleteButton.onclick = () => {
    localStorage.removeItem(obj.ctgry);
    userList.removeChild(li);
  }

   // create a input editbutton
   const editButton = document.createElement('input');
   editButton.id = 'button';
   // editButton.setAttribute('type', "button");
   // editButton.setAttribute('value', "Edit");
   editButton.type = "button";
   editButton.value = "Edit Expense";
   editButton.class = "btn";
   editButton.onclick = () => {
     localStorage.removeItem(obj.ctgry);
     userList.removeChild(li);
     document.getElementById('amount').value = obj.amnt;
     document.getElementById('description').value = obj.descrpn;
     document.getElementById('category').value = obj.ctgry;
   
   }
  li.appendChild(deleteButton);
  li.appendChild(editButton);
  // Append to ul
  userList.appendChild(li);

  

    // Clear fields
    // nameInput.value = '';
    // emailInput.value = '';
}




// // Function to handle form submission
// function handleFormSubmit(event) {
//     event.preventDefault(); // Prevent the form from submitting normally
  
//     // Get form values
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
  
//     // Create an object to store form data
//     var formData = {
//       name: name,
//       email: email
//     };
  
//     // Store the form data in local storage
//     localStorage.setItem('formData', JSON.stringify(formData));
  
//     // Display the form data on the screen
//     displayFormData(formData);
//   }
  
//   // Function to display form data on the screen
//   function displayFormData(formData) {
//     // Update the HTML elements with the form data
//     document.getElementById('nameDisplay').textContent = formData.name;
//     document.getElementById('emailDisplay').textContent = formData.email;
//   }
  
//   // Add event listener to the form submission
//   document.getElementById('myForm').addEventListener('submit', handleFormSubmit);
  
//   // Check if there is existing form data in local storage
//   var storedFormData = localStorage.getItem('formData');
//   if (storedFormData !== null) {
//     var parsedFormData = JSON.parse(storedFormData);
//     displayFormData(parsedFormData);
//   }


const myForm = document.querySelector('#my-form');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  // Retrieving data
  let uname = document.querySelector('#name').value;
  let uemail = document.querySelector('#email').value;

  localStorage.setItem('uname', uname);
  localStorage.setItem('uemail', uemail);
  const obj = {
    uname,
    uemail
  }
  localStorage.setItem('userDetails', JSON.stringify(obj));
}
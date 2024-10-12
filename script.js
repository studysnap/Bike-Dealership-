


document.getElementById('contact_form').addEventListener('submit', function (event) {
  event.preventDefault();

  const Name = document.getElementById('Name').value.trim();

  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
 
  const mes = document.getElementById('mes');


  errorMessage.textContent = 'fede';


  if (!Name || !email || !phone ||mes ) {
      errorMessage.textContent = 'All fields are required.';
      return;
  }
  if (!/^\d{10}$/.test(phone)) {
      errorMessage.textContent = 'Phone number must be 10 digits.';
      return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
      errorMessage.textContent = 'Invalid email format.';
      return;
  }
  // alert('Registration successful!');
});
// store the hyperlink for signup and profile page
const signUpPageNav = document.getElementById('signUp');
const profilePageNav = document.getElementById('profile');

// store the profile details elements
const nameEl = document.getElementById('disp-name');
const emailEl = document.getElementById('disp-email');
const passwordEl = document.getElementById('disp-password');
const userDetails = document.getElementById('user_deatails');

// **************************************************** //

let currUser = JSON.parse(localStorage.getItem('users'))[0];  // here we get the user details in object format
displaydetails(currUser);
userDetails.classList.remove('hidden');

// ***************************************************** //


function logOut() {
  localStorage.removeItem('users');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('state');
  userDetails.classList.add('hidden');

  location.href = './index.html';
}


function displaydetails(currUser) {
  nameEl.textContent = currUser.name.toUpperCase();
  emailEl.textContent = currUser.email;
  passwordEl.textContent = currUser.password;
}


signUpPageNav.addEventListener('click', () => {
  alert('You have already signed up!!');
})


profilePageNav.addEventListener('click', () => {
  alert('You are currently on the profile page');
})
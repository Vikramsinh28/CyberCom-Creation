const currentUser = JSON.parse(localStorage.getItem('currentUser'));
console.log(currentUser)
const user = document.getElementById('UserName');
user.textContent = currentUser.name;
// Déclaration de la fonction
function verification() {
// Déclaration des variables
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
  if(password.value == confirmPassword.value){
    password.style.borderColor = 'green';
    confirmPassword.style.borderColor = 'green';
  } else {
    password.style.borderColor = 'red';
    confirmPassword.style.borderColor = 'red';
  }
}

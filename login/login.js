
let userName = document.querySelector('#username');
let password = document.querySelector('#password');
let form = document.querySelector('.form-login');



let num = 0;
function passwordChecker() {
  if(username.value
    == 'brightgirl' && password.value == '64155378') {
    alert('success');
    form.setAttribute('action', 'loading/index.html')


  } else if(username.value == 'brightgirl' && password.value !== '64155378' ) {
    alert("You're very bright, girl... lol. The closer you look the less you see.");

  }else {
    alert('incorrect username or password. Ones and zeroes');

  }


 return;
}

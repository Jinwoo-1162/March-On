var username = document.getElementsByClassName('username');
var password = document.getElementsByClassName('password');
var uppertext = document.getElementById('uppertext');
var loginItems = document.getElementsByClassName('login-items');

var loginButt = document.getElementById('loginbutton');
var createButt = document.getElementById('createbutton');

var times = 0;

loginButt.addEventListener("click", function() {
    console.log(times++);
    if (username[0].value == '' && password[0].value == '') {
        uppertext.innerHTML = 'Please enter the requested information';
    } else {
        uppertext.innerHTML = 'Welcome ' + username[0].value;
        username[0].value = '';
        password[0].value = '';
    }
})

createButt.addEventListener("click", function() {
    console.log(times++);
    uppertext.innerHTML = 'Enter the following information:';
    username[0].value = '';
    password[0].value = '';
})
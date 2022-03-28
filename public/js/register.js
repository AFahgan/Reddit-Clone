/* eslint-disable no-undef */

const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const userName = document.getElementById("name");
const form = document.getElementsByTagName("form")[0];
const userNmaeErr = document.getElementById("userNmaeErr");
const emailErr = document.getElementById("emailErr");
const passwordErr = document.getElementById("passwordErr");


const displayErr=(errElem, errMsg)=> {
    errElem.innerText = errMsg;
  }

  const checkUserName = ()=> {
    if (userName.validity.typeMismatch) {
      displayErr(userNmaeErr, "Please enter a valid Name");
    } else if (userName.validity.valueMissing) {
      displayErr(userNmaeErr, "Please enter an Name");
    } else {
      displayErr(userNmaeErr, "");
      return true;
    }
  };

const checkEmail = ()=> {
  if (email.validity.typeMismatch) {
    displayErr(emailErr, "Please enter a valid email address");
  } else if (email.validity.valueMissing) {
    displayErr(emailErr, "Please enter an email address");
  } else {
    displayErr(emailErr, "");
    return true;
  }
};

const checkPw = ()=> {
  if (password.validity.patternMismatch) {
    displayErr(
      passwordErr,
      "Password must contain at least eight characters, including one letter and one number"
    );
  } else if (password.validity.valueMissing) {
    displayErr(passwordErr, "Please enter a password");
  } else {
    displayErr(passwordErr, "");
    return true;
  }
};


userName.addEventListener("focusout", checkUserName)
email.addEventListener("focusout", checkEmail);
password.addEventListener("focusout", checkPw);

form.addEventListener("submit", (event)=> {
    if (!checkUserName()) {
        event.preventDefault();
      }
  if (!checkEmail()) {
    event.preventDefault();
  }
  if (!checkPw()) {
    event.preventDefault();
  }
event.preventDefault();
fetch('/api/v1/register',{
  method:'POST',
  headers:{ "Content-Type": 'application/json'},
  redirect: 'follow' ,
  body: JSON.stringify({
    username:userName.value,
    email:email.value,
    password:password.value,
  })
}).then((response) => {
  if (response.redirected) {
      window.location.href = response.url;
    }
      //  else {
  //    alert("Please Enter Another Email!")
  //     }
  return response;
}) .then(response=> response.json())
.then(data=>{
  swal('ERROR!',data,'error')
})
});





// user
fetch("/user").then(response => response.json())
.then(([user ])=>{ 
    const btnlk = document.querySelector('.username');
    const username = document.createElement('span');
    username.textContent = user[0].username;
    btnlk.appendChild(username)

    const btnlk2 = document.querySelector('.username2');
    const username2 = document.createElement('span');
    username2.textContent = user[0].username;
    btnlk2.appendChild(username2)
    
    const btnlkemail = document.querySelector('.Email');

    const email = document.createElement('span');
    email.textContent = user[0].email;
    btnlkemail.appendChild(email)
   
})



const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener('click',(event)=>{
    event.preventDefault();
fetch('/logout').then((response) => {
  if (response.redirected) {
    window.location.href = response.url;
  }
  return response;
});
})



fetch("/user").then(response => response.json())
.then(([user ])=>{ 
    const btnlk = document.querySelector('.username');
    const username = document.createElement('span');
    username.textContent = user[0].username;
    btnlk.appendChild(username)

   
})
//clear cookies and logout
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
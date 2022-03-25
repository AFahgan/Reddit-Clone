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
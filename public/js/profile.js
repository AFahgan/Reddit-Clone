const deletePost = (id) => fetch(`/deletePost/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
  });
  
  /* eslint-disable no-console */
  const updatePost = (id) => fetch(`/updatePost/${id}`, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
  });
  
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



fetch('/getposts')
.then((res) => res.json())
.then((posts) => {
  // eslint-disable-next-line no-console
  console.log(posts);
  const postCard = document.querySelector('.news-section');
  posts.forEach((post) => {
    const postdiv = document.createElement('div');
    postdiv.classList.add('news-card');
    postCard.appendChild(postdiv);

   
    const postDetails = document.createElement('div');
    postDetails.classList.add('news-details');
    postdiv.appendChild(postDetails);

    const postTitle = document.createElement('p');
    postTitle.classList.add('news-title');
    postTitle.textContent = post.title;
    postDetails.appendChild(postTitle);

    const postcontent= document.createElement('p');
    postcontent.classList.add('news-title');
    postcontent.textContent = post.content;
    postDetails.appendChild(postcontent);

    const postby= document.createElement('p');
    postby.classList.add('news-title');
    postby.textContent = post.user_id;
    postDetails.appendChild(postby);

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('news-category');
    deleteBtn.textContent = 'Delete Post';
    deleteBtn.onclick = () => {
      console.log(post.id);
      deletePost(post.id).then(window.location.assign('/home'));
    };
    postDetails.appendChild(deleteBtn);

    const updateBtn = document.createElement('button');
    updateBtn.classList.add('news-category');
    updateBtn.textContent = 'Update Post';
    updateBtn.onclick = () => {
      console.log(post.id);
      updatePost(post.id).then(window.location.assign('/home'));
    };
    postDetails.appendChild(updateBtn);
  });
});
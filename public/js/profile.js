
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

fetch("/userpost")
  .then((res) => res.json())
  .then((posts) => {
    
    const postCard = document.querySelector(".redditposts");
    posts.forEach((post) => {
      const postdiv = document.createElement("div");
      postdiv.classList.add("redditpost");
      postCard.appendChild(postdiv);
      console.log(post[i]);

      const voteSection = document.createElement("div");
      voteSection.classList.add("vote-section");
      postdiv.appendChild(voteSection);

      const vote = document.createElement("div");
      vote.classList.add("vote");
      voteSection.appendChild(vote);

      const voteup = document.createElement("i");
      voteup.classList.add("fa-solid", "fa-up");
      voteup.id = "voteup";
      vote.appendChild(voteup);
      const votenumber = document.createElement("p");
      votenumber.textContent = post.votes;
      vote.appendChild(votenumber);
      const votedown = document.createElement("i");
      votedown.classList.add("fa-solid", "fa-down");
      votedown.id = "votedown";
      vote.appendChild(votedown);

      const postbody = document.createElement("div");
      postbody.classList.add("post-body");
      postdiv.appendChild(postbody);

      const subData = document.createElement("div");
      subData.classList.add("subData");
      postbody.appendChild(subData);

      const subImg = document.createElement("img");
      subImg.classList.add("subImg");
      subImg.src = post.img_url;
      subData.appendChild(subImg);

      const subname = document.createElement("h5");
      subname.classList.add("subname");
      subname.textContent = "r/GSG";
      subData.appendChild(subname);

      const postBy = document.createElement("h5");
      postBy.classList.add("postBy");
      postBy.textContent = "• Posted by u/";
      subData.appendChild(postBy);

      const userPost = document.createElement("a");
      userPost.href = "/profile";
      userPost.textContent = "UserID:"+post.user_id;
      postBy.appendChild(userPost);

      const postdate = document.createElement("h5");
      postdate.classList.add("postdate");
      postdate.textContent = "Two hours ago";
      subData.appendChild(postdate);


      const postTitle = document.createElement("div");
      postTitle.classList.add("postTitle");
      postbody.appendChild(postTitle);

      const postTitleP = document.createElement("p");
      postTitleP.textContent = post.title;
      postTitle.appendChild(postTitleP);

      const postContent = document.createElement("div");
      postContent.classList.add("postContent");
      postbody.appendChild(postContent);

      const postContentP = document.createElement("p");
      postContentP.textContent = post.content;
      postContent.appendChild(postContentP);

      const postFooter = document.createElement("div");
      postFooter.classList.add("postFooter");
      postbody.appendChild(postFooter);

      const postImg = document.createElement("div");
      postImg.classList.add("postImg");
      postFooter.appendChild(postImg);
      const postImgurl = document.createElement("img");
      postImgurl.src = post.img_url;
      postImg.appendChild(postImgurl);

      const FooterBtns = document.createElement("div");
      FooterBtns.classList.add("FooterBtns");
      postFooter.appendChild(FooterBtns);

      const footerBtn = document.createElement("button");
      footerBtn.classList.add("footer-btn");
      footerBtn.textContent="0 comments";
      FooterBtns.appendChild(footerBtn);
      const faReg = document.createElement("i");
      faReg.classList.add("fa-regular", "fa-message");
      footerBtn.appendChild(faReg);
      const footerBtndots = document.createElement("button");
      footerBtndots.classList.add("footer-btn");
      footerBtndots.textContent="• • •";

      FooterBtns.appendChild(footerBtndots);
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('footer-btn');
      deleteBtn.textContent = 'Delete Post';
      deleteBtn.onclick = () => {
        console.log(post.id);
        deletePost(post.id).then(window.location.assign('/reddit'));
      };
      FooterBtns.appendChild(deleteBtn);
    });
  });


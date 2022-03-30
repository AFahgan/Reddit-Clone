
/* eslint-disable no-console */
const updatePost = (id) =>
  fetch(`/updatePost/${id}`, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  });
  const id = window.location.href.split("?")[1]?.split("=")[1];

fetch("/getposts")
  .then((res) => res.json())
  .then((posts) => {
if(!posts.length){
  console.log(posts);
  const noPosts = document.createElement("div");
        noPosts.className = "Nopost";
        noPosts.textContent = "There Are No posts Yet";
        const postsdiv = document.querySelector(".redditposts");

        postsdiv.appendChild(noPosts);
        const noPostsimg = document.createElement("img");
        noPostsimg.className = "Nopostimg";
        noPostsimg.src = "./assets/not_found.png";
        postsdiv.appendChild(noPostsimg);
}else{


    const postCard = document.querySelector(".redditposts");
    posts.forEach((post) => {
      const postdiv = document.createElement("div");
      postdiv.classList.add("redditpost");
      postCard.appendChild(postdiv);

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
      userPost.href = `/profile?id=${post.user_id}`;
      userPost.textContent = post.username;
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
    //   footerBtn.addEventListener('click',(event)=>{
    //     event.preventDefault();
    // })
      const faReg = document.createElement("i");
      faReg.classList.add("fa-regular", "fa-message");
      footerBtn.appendChild(faReg);
      const footerBtndots = document.createElement("button");
      footerBtndots.classList.add("footer-btn");
      footerBtndots.textContent="• • •";

      FooterBtns.appendChild(footerBtndots);
    
    });
  }
  });

  
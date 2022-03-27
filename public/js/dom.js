fetch("/getposts")
  .then((res) => res.json())
  .then((posts) => {
    console.log(posts);
    const postCard = document.querySelector(".news-section");
    posts.forEach((post) => {
      const postdiv = document.createElement("div");
      postdiv.classList.add("news-card");
      postCard.appendChild(postdiv);

      const postTitle = document.createElement("p");
      postTitle.classList.add("news-title");
      postTitle.textContent = post.title;
      postdiv.appendChild(postTitle);
    });
  });

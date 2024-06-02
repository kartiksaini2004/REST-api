const posts = document.querySelector(".posts");
const fetchPosts = document.querySelector("#fetchPosts");

fetchPosts.addEventListener("click", async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      posts.innerHTML = "";
      data.forEach(async (post) => {
        console.log(post);
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        const username = document.createElement("h2");
        username.classList.add("username");
        const email = document.createElement("h2");
        email.classList.add("email");
        const title = document.createElement("h3");
        title.classList.add("title");
        const postContent = document.createElement("p");
        postContent.classList.add("postcontent");
        const comments = document.createElement("button");
        comments.id = "comments";
        const hr = document.createElement("hr");
        await fetch(
          `https://jsonplaceholder.typicode.com/users?id=${post.userId}`
        )
          .then((response) => response.json())
          .then((users) => {
            const user = users[0];
            console.log(user);
            username.innerText = "Username: "+user.username;
            email.innerText = "Email: "+ user.email;
          });
        title.innerText = "Title: "+post.title;
        postContent.innerText = post.body;
        comments.innerText = "Comments";

        comments.addEventListener("click",()=>{

        })

        postDiv.appendChild(username);
        postDiv.appendChild(email);
        postDiv.appendChild(title);
        postDiv.appendChild(postContent);
        postDiv.appendChild(comments);
        postDiv.appendChild(hr);
        posts.appendChild(postDiv);
      });
    });
});

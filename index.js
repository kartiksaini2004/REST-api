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
            username.innerText = "Username: " + user.username;
            email.innerText = "Email: " + user.email;
          });
        title.innerText = "Title: " + post.title;
        postContent.innerText = post.body;
        comments.innerText = "Comments";

        comments.addEventListener("click", async () => {
          const commentDialog = document.querySelector("#content-popup");
          commentDialog.classList.remove("hidden");
          const commentBox = document.querySelector(".comments-container");
          await fetch(
            `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
          )
            .then((response) => response.json())
            .then((commentData) => {
              commentBox.innerHTML = "";
              commentData.forEach((newComment) => {
                const comment = document.createElement("div");
                comment.classList.add("comment");
                const emailId = document.createElement("h3");
                const commentContent = document.createElement("p");
                emailId.innerText = newComment.email;
                commentContent.innerText = newComment.body;
                comment.appendChild(emailId);
                comment.appendChild(commentContent);
                commentBox.appendChild(comment);
              });
            });
        });

        document.querySelector(".close-btn").addEventListener("click", () => {
          const commentDialog = document.querySelector("#content-popup");
          const commentBox = document.querySelector(".comments-container");
          commentBox.innerHTML="";
          commentDialog.classList.add("hidden");
        });

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

const getPost = () => {
  const postBody = document.querySelector(".post-body");
  const postTitle = document.querySelector(".post-title");
  const postComments = document.querySelector(".post-comments");
  const value = prompt("Enter id of post");
  const reg = /^(?:[1-9][0-9]?|100)$/;

  if (!reg.test(value)) {
    console.log("Invalid value");
    return;
  }

  fetch(`https://jsonplaceholder.typicode.com/posts/${value}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Post not found");
      }
      return response.json();
    })
    .then((json) => {
      postBody.textContent = json.body;
      postTitle.textContent = json.title;
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(reg.test(value));

  document.getElementById("btn").addEventListener("click", () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${value}/comments`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load comments");
        }
        return response.json();
      })
      .then((json) => {
        json.forEach((item) => {
          const commentName = document.createElement("p");
          const commentEmail = document.createElement("p");
          const commentBody = document.createElement("p");

          commentName.textContent = item.name;
          commentEmail.textContent = item.email;
          commentBody.textContent = item.body;

          postComments.append(commentName, commentEmail, commentBody);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

getPost();

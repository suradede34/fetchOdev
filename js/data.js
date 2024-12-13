const data = {
  "currentUser": {
    "image": { 
      "png": "./images/avatars/image-juliusomo.png",
      "webp": "./images/avatars/image-juliusomo.webp"
    },
    "username": "juliusomo"
  },
  "comments": [
    {
      "id": 1,
      "content": "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": { 
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    },
    {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": { 
          "png": "./images/avatars/image-maxblagun.png",
          "webp": "./images/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": "./images/avatars/image-ramsesmiron.png",
              "webp": "./images/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        },
        {
          "id": 4,
          "content": "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          "createdAt": "2 days ago",
          "score": 2,
          "replyingTo": "ramsesmiron",
          "user": {
            "image": { 
              "png": "./images/avatars/image-juliusomo.png",
              "webp": "./images/avatars/image-juliusomo.webp"
            },
            "username": "juliusomo"
          }
        }
      ]
    }
  ]
}



function renderList() {
  const commentsContainer = document.querySelector('.commentsList'); 
  commentsContainer.innerHTML = "";
  
  for (const comment of data.comments) {
    const user = comment.user; 

    let commentHTML = `
      <div class="comment">
        <img src="${user.image.webp}" class="avatar">
        <p class="username">${user.username}</p>
        <p class="createdAt">${comment.createdAt}</p>
        </div>
        <p class="commentContent">${comment.content}</p>
        <p class="score">${comment.score}</p>
        </div>
    `;
    
    if (comment.replies.length > 0) {
      commentHTML += `<div class="replies">`;

      for (const reply of comment.replies) {
        const replyUser = reply.user;
        commentHTML += `
        <div class="reply">
          <img src="${replyUser.image.png}" class="avatar">
          <p class="username">${replyUser.username}</p>
          <p class="createdAt">${reply.createdAt}</p>
          <p class="replyContent">${reply.content}</p>
          <p class="score">${reply.score}</p>
        </div>
        `;
      }
    }
    commentsContainer.innerHTML += commentHTML;
  }
}

function addComment() {
  const commentInput = document.querySelector('.textarea'); 
  const currentUser = data.currentUser;
  const commentsContainer = document.querySelector('.commentsList'); 
  const newCommentContent = commentInput.value.trim();
  
  const newComment = {
    id: data.comments.length + 1,  
    content: newCommentContent,
    createdAt: "Just now",  
    score: 0, 
    user: currentUser, 
    replies: [] 
  };
  data.comments.push(newComment);
  commentInput.value = "";
  renderList();
}
renderList();

const submitButton = document.querySelector('.submitButton');
submitButton.addEventListener('click', addComment);
function enableEditMode() {
    var title = document.getElementById("post-title");
    var text = document.getElementById("post-text");
    title.contentEditable = true;
    text.contentEditable = true;
    title.style.border = "2px solid pink";
    text.style.border = "2px solid pink";
    document.getElementById("edit-button").innerHTML = "Save <i class='fa fa-save'></i>";
    document.getElementById("edit-button").onclick = disableEditMode;
  }
  
  function disableEditMode() {
    var title = document.getElementById("post-title");
    var text = document.getElementById("post-text");
    title.contentEditable = false;
    text.contentEditable = false;
    title.style.border = "none";
    text.style.border = "none";
    document.getElementById("edit-button").innerHTML = "Edit <i class='fa fa-edit'></i>";
    document.getElementById("edit-button").onclick = enableEditMode;
  }

  
  var likeButton = document.getElementById("likeButton");
var likeMessage = document.getElementById("likeMessage");
var likes = 0;

likeButton.addEventListener("click", function() {
  likes++;
  if (likes === 1) {
    likeMessage.innerHTML = "1 person likes this!";
  } else {
    likeMessage.innerHTML = likes + " people like this!";
  }
  likeButton.innerHTML = "<i class=\"fa fa-thumbs-up\"></i> Liked!";
  likeButton.classList.add("liked");
});


const commentButton = document.getElementById("comment-button");
const commentInput = document.getElementById("comment-input");
const allComments = document.getElementById("all-comments");

commentButton.addEventListener("click", function() {
  const commentText = commentInput.value.trim();
  if (commentText !== "") {
    const comment = document.createElement("div");
    comment.innerText = commentText;
    comment.classList.add("comment");
    allComments.appendChild(comment);
    commentInput.value = "";
    allComments.classList.add("gray");
  }
});



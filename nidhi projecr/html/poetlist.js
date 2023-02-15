let postToDelete = null;

function showModal(deleteButton) {
  const post = deleteButton.closest(".post");
  postToDelete = post;
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

function deletePost() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";

  if (postToDelete) {
    postToDelete.remove();
    postToDelete = null;

    // Re-arrange remaining posts
    const postList = document.getElementById("post-list");
    const posts = postList.getElementsByClassName("post");

    for (let i = 0; i < posts.length; i++) {
      posts[i].style.order = i;
    }
  }
}


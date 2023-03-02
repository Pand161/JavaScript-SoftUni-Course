function attachEvents() {
  const loadPostsBtn = document.getElementById('btnLoadPosts');
  const postsOption = document.getElementById('posts');
  const viewPostsBtn = document.getElementById('btnViewPost');

  loadPostsBtn.addEventListener('click', () => {
    const postsPromise = fetch(`http://localhost:3030/jsonstore/blog/posts`);

    postsPromise
      .then((result) => result.json())
      .then((result) => {
        Object.keys(result).forEach((el) => {
          let option = document.createElement('option');
          option.value = el;
          option.textContent = result[el].title;
          postsOption.appendChild(option);
        });
      })
      .catch((err) => console.log(err));
  });

  viewPostsBtn.addEventListener('click', () => {});
}

attachEvents();

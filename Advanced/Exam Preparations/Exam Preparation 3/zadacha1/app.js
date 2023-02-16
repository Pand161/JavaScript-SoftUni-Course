window.addEventListener('load', solve);

function solve() {
  const publishBtn = document.getElementById('publish-btn');
  const titleInput = document.getElementById('post-title');
  const categoryInput = document.getElementById('post-category');
  const contentInput = document.getElementById('post-content');
  const reviewList = document.getElementById('review-list');
  const publishedList = document.getElementById('published-list');
  const clearBtn = document.getElementById('clear-btn');

  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const liElements = publishedList.querySelectorAll('li');
    Array.from(liElements).map((x) => x.remove());
  });

  publishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      titleInput.value == '' ||
      categoryInput.value == '' ||
      contentInput.value == ''
    ) {
      return;
    }

    const titleH4 = document.createElement('h4');
    const categoryP = document.createElement('p');
    const contentP = document.createElement('p');
    const article = document.createElement('article');
    const editBtn = document.createElement('button');
    const approveBtn = document.createElement('button');
    const li = document.createElement('li');

    const titleValue = titleInput.value;
    const categoryValue = categoryInput.value;
    const contentValue = contentInput.value;

    approveBtn.textContent = 'Approve';
    editBtn.textContent = 'Edit';

    li.classList.add('rpost');
    editBtn.classList.add('action-btn', 'edit');
    approveBtn.classList.add('action-btn', 'approve');

    titleH4.textContent = titleInput.value;
    categoryP.textContent = 'Category: ' + categoryInput.value;
    contentP.textContent = 'Content: ' + contentInput.value;

    editBtn.addEventListener('click', (e) => {
      e.preventDefault();
      titleInput.value = titleValue;
      categoryInput.value = categoryValue;
      contentInput.value = contentValue;
      li.remove();
    });

    approveBtn.addEventListener('click', (e) => {
      e.preventDefault();
      publishedList.appendChild(li);
      approveBtn.remove();
      editBtn.remove();
    });

    article.appendChild(titleH4);
    article.appendChild(categoryP);
    article.appendChild(contentP);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(approveBtn);

    reviewList.appendChild(li);

    titleInput.value = '';
    categoryInput.value = '';
    contentInput.value = '';
  });
}

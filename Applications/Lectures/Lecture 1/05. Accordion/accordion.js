function solution() {
  let url = `http://localhost:3030/jsonstore/advanced/articles/list`;
  let promise = fetch(url);
  const main = document.getElementById('main');

  promise
    .then((result) => result.json())
    .then((result) => {
      result.forEach((el) => {
        let eachPromise = fetch(
          `http://localhost:3030/jsonstore/advanced/articles/details/${el._id}`
        );
        eachPromise
          .then((result) => result.json())
          .then((result) => {
            const accordion = document.createElement('div');
            const head = document.createElement('div');
            const extra = document.createElement('div');
            const title = document.createElement('span');
            const button = document.createElement('button');
            const p = document.createElement('p');

            accordion.classList.add('accordion');
            head.classList.add('head');
            extra.classList.add('extra');
            button.classList.add('button');

            button.setAttribute('id', result._id);

            title.textContent = result.title;
            p.textContent = result.content;
            button.textContent = 'More';

            button.addEventListener('click', () => {
              if (button.textContent == 'More') {
                extra.style.display = 'block';
                button.textContent = 'Less';
              } else {
                extra.style.display = 'none';
                button.textContent = 'More';
              }
            });

            head.appendChild(title);
            head.appendChild(button);
            extra.appendChild(p);
            extra.style.display = 'none';

            accordion.appendChild(head);
            accordion.appendChild(extra);
            main.appendChild(accordion);
          })
          .catch((err) => console.log(err));
      });
    })
    .catch((err) => console.log(err));
}

solution();

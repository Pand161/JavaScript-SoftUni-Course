function solve() {
  const addButton = document.querySelector('#add');
  const [addTaskSelector, openSelector, inProgressSelector, completeSelector] =
    document.querySelectorAll('body main div section');
  const openDiv = openSelector.querySelectorAll('div')[1];
  const inProgressdiv = inProgressSelector.querySelectorAll('div')[1];
  const completeDiv = completeSelector.querySelectorAll('div')[1];

  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    let task = document.querySelector('#task');
    let description = document.querySelector('#description');
    let date = document.querySelector('#date');

    if (task.value != '' || description != '' || date.value != '') {
      let article = document.createElement('article');
      let title = document.createElement('h3');
      let desc = document.createElement('p');
      let dateEl = document.createElement('p');

      title.textContent = task.value;
      desc.textContent = `Description: ${description.value}`;
      dateEl.textContent = `Due Date: ${date.value}`;

      article.appendChild(title);
      article.appendChild(desc);
      article.appendChild(dateEl);

      //Buttons

      let divEl = document.createElement('div');
      divEl.classList.add('flex');

      let greenBtn = document.createElement('button');
      greenBtn.textContent = 'Start';
      greenBtn.classList.add('green');

      greenBtn.addEventListener('click', greenBtnFunc);

      //Green Button Function

      function greenBtnFunc() {
        inProgressdiv.appendChild(article);

        let orangeBtn = document.createElement('button');
        orangeBtn.textContent = 'Finish';
        orangeBtn.classList.add('orange');

        orangeBtn.addEventListener('click', orangeBtnfunc);

        divEl.appendChild(orangeBtn);

        greenBtn.remove();
      }

      //Orange Button Function

      function orangeBtnfunc() {
        completeDiv.appendChild(article);

        divEl.remove();
      }

      let redBtn = document.createElement('button');
      redBtn.classList.add('red');
      redBtn.textContent = 'Delete';

      redBtn.addEventListener('click', redBtnfunc);

      //Red Button Function

      function redBtnfunc() {
        article.remove();
      }

      divEl.appendChild(greenBtn);
      divEl.appendChild(redBtn);
      article.appendChild(divEl);
      openDiv.appendChild(article);
    }
  });
}

//function createEl(type, attributes, ...content) {
//     const result = document.createElement(type);

//     for (let [attr, value] of Object.entries(attributes || {})) {
//       if (attr.substring(0, 2) == 'on') {
//         result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
//       } else {
//         if (typeof value === 'boolean') {
//           result[attr] = value;
//         } else {
//           result.setAttribute(attr, value);
//         }
//       }
//     }

//     content = content.reduce(
//       (a, c) => a.concat(Array.isArray(c) ? c : [c]),
//       []
//     );

//     content.forEach((e) => {
//       if (typeof e == 'string' || typeof e == 'number') {
//         const node = document.createTextNode(e);
//         result.appendChild(node);
//       } else {
//         result.appendChild(e);
//       }
//     });

//     return result;
//   }

//   const addButton = document.querySelector('#add');
//   const [addTaskSelector, openSelector, inProgressSelector, completeSelector] =
//     document.querySelectorAll('body main div section');
//   const openDiv = openSelector.querySelectorAll('div')[1];
//   const inProgressdiv = inProgressSelector.querySelectorAll('div')[1];
//   const completeDiv = completeSelector.querySelectorAll('div')[1];

//   addButton.addEventListener('click', () => {
//     event.preventDefault();

//     let task = document.querySelector('#task');
//     let description = document.querySelector('#description');
//     let date = document.querySelector('#date');

//     if (
//       task.value.trim() != '' &&
//       description.value.trim() != '' &&
//       date.value.trim() != ''
//     ) {
//       createEl(
//         'a',
//         'Like'
//       );
//     }
//   });

import { html, render } from './node_modules/lit-html/lit-html.js';

const menu = document.getElementById('menu');
const form = document.querySelector('form');

customTemplating();

form.addEventListener('submit', addItem);

async function addItem(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = formData.get('itemText');
  postData('http://localhost:3030/jsonstore/advanced/dropdown', data);
  customTemplating();
  form.reset();
}

async function postData(url, data) {
  const info = {
    text: data,
    _id: data.id,
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(info),
    });
    if (response.ok != true) {
      const err = await response.json();
      throw err;
    }

    return await response.json();
  } catch (err) {
    alert(err.message);
  }
}

async function customTemplating() {
  const data = await getData(
    'http://localhost:3030/jsonstore/advanced/dropdown'
  );

  const template = Object.keys(data).map(
    (el) => html` <option value=${data[el]._id}>${data[el].text}</option> `
  );

  render(template, menu);
}

async function getData(url) {
  try {
    const response = await fetch(url);
    if (response.ok != true) {
      const err = await response.json();
      throw err;
    }

    return await response.json();
  } catch (err) {
    alert(err.message);
  }
}

function encodeAndDecodeMessages() {
  const encodeButton = document.querySelector('body div main div button');
  const decodeButton = document.querySelectorAll('body div main div button')[1];
  const message = document.querySelector('body div main div textarea');
  const messageAfter = document.querySelectorAll(
    'body div main div textarea'
  )[1];

  encodeButton.addEventListener('click', (e) => {
    let text = message.value;
    let str = '';
    message.value = '';

    for (let i = 0; i < text.length; i++) {
      str += String.fromCharCode(text[i].charCodeAt() + 1);
    }

    messageAfter.value = str;
  });

  decodeButton.addEventListener('click', (e) => {
    let text = messageAfter.value;
    let str = '';

    for (let i = 0; i < text.length; i++) {
      str += String.fromCharCode(text[i].charCodeAt() - 1);
    }

    messageAfter.value = str;
  });
}

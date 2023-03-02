function attachEvents() {
  const sendBtn = document.getElementById('submit');
  const refreshBtn = document.getElementById('refresh');
  const nameInput = document.querySelector('#controls input');
  const messageInput = document.querySelectorAll('#controls input')[1];
  const textArea = document.getElementById('messages');

  sendBtn.addEventListener('click', async () => {
    if (nameInput.value == '' || messageInput.value == '') {
      return;
    }

    await fetch(`http://localhost:3030/jsonstore/messenger`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        author: nameInput.value,
        content: messageInput.value,
      }),
    });
  });

  refreshBtn.addEventListener('click', async () => {
    const response = await fetch(`http://localhost:3030/jsonstore/messenger`);
    const data = await response.json();
    textArea.textContent = Object.keys(data)
      .map((el) => `${data[el].author}: ${data[el].content}`)
      .join('\n');
  });
}

attachEvents();

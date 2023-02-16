function chatLogger(input) {
  let chat = [];

  for (let i = 0; i < input.length; i++) {
    command = input[i];

    if (command.includes('end')) {
      break;
    }
    if (command.includes('Chat')) {
      let message = command.slice(5);
      chat.push(message);
    } else if (command.includes('Delete')) {
      let message = command.slice(7);
      if (chat.includes(message)) {
        let index = chat.indexOf(message);
        chat.splice(index, 1);
      }
    } else if (command.includes('Edit')) {
      let message = command.slice(5);
      let oldMessage = message.split(' ').shift();
      let editedMessage = message.split(' ').pop();
      if (chat.includes(oldMessage)) {
        let index = chat.indexOf(oldMessage);
        chat.splice(index, 1, editedMessage);
      }
    } else if (command.includes('Pin')) {
      let message = command.slice(4);
      if (chat.includes(message)) {
        let index = chat.indexOf(message);
        chat.splice(index, 1);
        chat.push(message);
      }
    } else if (command.includes('Spam')) {
      let message = command.slice(5);
      let spam = message.split(' ');
      for (let j = 0; j < spam.length; j++) {
        chat.push(spam[j]);
      }
    }
  }

  console.log(chat.join('\n'));
}

chatLogger([
  'Chat Hello',
  'Chat darling',
  'Chat hello',
  'Edit darling Darling',
  'Pin Hello',
  'Spam how are you',
  'Delete Darling',
  'end',
]);

function decoder(arr1) {
  let encryptedMessage = arr1.shift();
  const length = arr1.length;
  for (let i = 0; i < length; i++) {
    const lineOfMessage = arr1[i].split('|');
    const command = lineOfMessage[0];

    if (arr1[i] == 'Decode') {
      break;
    }

    if (command == 'Move') {
      const index = lineOfMessage[1];

      let staticPart = encryptedMessage.slice(index);
      let partToMove = encryptedMessage.slice(0, index);

      encryptedMessage = staticPart + partToMove;
    } else if (command == 'Insert') {
      const index = lineOfMessage[1];
      const value = lineOfMessage[2];

      let firstHalf = encryptedMessage.slice(0, index);
      let secondHalf = encryptedMessage.slice(index);

      encryptedMessage = firstHalf + value + secondHalf;
    } else {
      const substring = lineOfMessage[1];
      const replacement = lineOfMessage[2];

      for (let j = 0; j < encryptedMessage.length; j++) {
        encryptedMessage = encryptedMessage.replace(substring, replacement);
      }
    }
  }

  console.log(`The decrypted message is: ${encryptedMessage}`);
}

decoder(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);

decoder(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);

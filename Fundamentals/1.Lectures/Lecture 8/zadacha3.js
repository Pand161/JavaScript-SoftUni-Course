function extractFile(str) {
  let extension = str.substring(str.lastIndexOf('.') + 1);
  let fileName = str.substring(str.lastIndexOf('\\') + 1, str.lastIndexOf('.'));
  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');

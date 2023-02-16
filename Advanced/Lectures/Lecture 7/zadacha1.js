function validateRequest(requestObj) {
  const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

  let uri = requestObj.uri;
  let message = requestObj.message;

  if (!validMethods.includes(requestObj.method)) {
    throw new Error('Invalid request header: Invalid Method');
  } else if (
    uri === undefined ||
    /[^A-Za-z0-9.\n]/gm.test(uri) ||
    !uri.length
  ) {
    throw new Error('Invalid request header: Invalid URI');
  } else if (!validVersions.includes(requestObj.version)) {
    throw new Error('Invalid request header: Invalid Version');
  } else if (/[<>\\&'"]/gm.test(message) || message === undefined) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return requestObj;
}

console.log(
  validateRequest({
    method: 'GET',

    uri: 'svn.public.catalog',

    version: 'HTTP/1.1',

    message: '',
  })
);

// solve({
//   method: 'OPTIONS',

//   uri: 'git.master',

//   version: 'HTTP/1.1',

//   message: '-recursive',
// });

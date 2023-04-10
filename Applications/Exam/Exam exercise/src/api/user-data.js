const key = 'userData';

export function getUserData() {
  return sessionStorage.getItem(key);
}

export function setUserData(data) {
  sessionStorage.setItem(key, JSON.stringify(parseUserData(data)));
}

export function clearUserData() {
  sessionStorage.removeItem(key);
}

function parseUserData(data) {
  return {
    email: data.email || null,
    id: data._id || null,
    accessToken: data.accessToken || null,
  };
}

import { get, post } from './api.js';
import { clearUserData, setUserData } from './user-data.js';

const endpoints = {
  register: '/users/register',
  login: '/users/login',
  logout: '/users/logout',
};

export async function registerUser(email, password) {
  const result = await post(endpoints.register, { email, password });
  const userData = getUserDataFromAuthRequest(result);

  setUserData(userData);
}

export async function loginUser(email, password) {
  const result = await post(endpoints.login, { email, password });
  const userData = getUserDataFromAuthRequest(result);

  setUserData(userData);
}

export async function logoutUser() {
  await get(endpoints.logout);
  clearUserData();
}

function getUserDataFromAuthRequest(requestData) {
  return {
    email: requestData.email,
    _id: requestData._id,
    accessToken: requestData.accessToken,
  };
}

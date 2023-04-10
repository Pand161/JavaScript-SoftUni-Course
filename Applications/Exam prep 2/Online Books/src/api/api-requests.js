import { get, post, put, del } from './api.js';

const endpoints = {
  dashboard: '/data/books?sortBy=_createdOn%20desc',
  books: '/data/books',
  myBooks: (userId) =>
    `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
};

export async function getDashboard() {
  return get(endpoints.dashboard);
}

export async function postCreate(data) {
  return post(endpoints.books, data);
}

export async function getDetails(id) {
  return get(endpoints.books + `/${id}`);
}

export async function putEdit(id, data) {
  return put(endpoints.books + `/${id}`, data);
}

export async function getMyBooks(userId) {
  return get(endpoints.myBooks(userId));
}

export async function delBook(id) {
  return del(endpoints.books + `/${id}`);
}

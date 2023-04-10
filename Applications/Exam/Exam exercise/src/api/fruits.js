import { get, post, put, del } from './api.js';

const endpoints = {
  dashboard: '/data/fruits?sortBy=_createdOn%20desc',
  fruits: '/data/fruits',
  filteredFruits: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`,
};

export async function getDashboard() {
  return get(endpoints.dashboard);
}

export async function postCreate(data) {
  return post(endpoints.fruits, data);
}

export async function getDetails(id) {
  return get(endpoints.fruits + `/${id}`);
}

export async function putEdit(id, data) {
  return put(endpoints.fruits + `/${id}`, data);
}

export async function deleteFruit(id) {
  return del(endpoints.fruits + `/${id}`);
}

export async function filterFruits(query) {
  return get(endpoints.filteredFruits(query));
}

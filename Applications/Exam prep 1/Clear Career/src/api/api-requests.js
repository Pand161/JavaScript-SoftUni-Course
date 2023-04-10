import { get, post, put, del } from './api.js';

const endpoints = {
  dashboard: '/data/offers?sortBy=_createdOn%20desc',
  offers: '/data/offers',
};

export async function getDashboardElements() {
  return get(endpoints.dashboard);
}

export async function postNewOffer(data) {
  return post(endpoints.offers, data);
}

export async function getOfferDetails(id) {
  return get(endpoints.offers + `/${id}`);
}

export async function putEditOffer(id, data) {
  return put(endpoints.offers + `/${id}`, data);
}

export async function deleteOffer(id) {
  return del(endpoints.offers + `/${id}`);
}

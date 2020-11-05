import http from "./http-common";

const getAll = (url: string) => {
  return http.get(url);
};

const get = (url, id) => {
  return http.get(`${url}/${id}`);
};

const create = (url, data) => {
  return http.post(url, data);
};

const update = (url, id, data) => {
  return http.put(`${url}/${id}`, data);
};

const remove = (url, id) => {
  return http.delete(`${url}/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};

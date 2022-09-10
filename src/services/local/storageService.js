const key = "connlab_";

const save = (resource, data) => {
  sessionStorage.setItem(key.concat(resource), JSON.stringify(data));
};

const get = (resource) => {
  const data = sessionStorage.getItem(key.concat(resource));
  if (data) return JSON.parse(data);
  return null;
};

const clear = (resource) => {
  sessionStorage.removeItem(key.concat(resource));
};

export const storageService = {
  save,
  get,
  clear,
};

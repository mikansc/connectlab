const key = "connlab";

const save = (data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const get = () => {
  localStorage.getItem(key);
};

export const storageService = {
  save,
  get,
};

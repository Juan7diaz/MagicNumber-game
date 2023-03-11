export const getStorage = (key) => {
  return localStorage.getItem(key);
};

export const setStorage = (key, payload) => {
  localStorage.setItem(key, payload);
};

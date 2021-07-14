import { User } from 'types';

const localStorageKey = '__auth_provider_token__';
const apiUrl = process.env.REACT_APP_API_URL;
export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserRespone = ({ user }: { user: User }) => {
  window.localStorage.setItem(localStorageKey, user.token || '');
  return user;
};

export const login = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      let data = await res.json();
      return handleUserRespone(data);
    } else {
      return Promise.reject(data);
    }
  });
};
export const register = (data: { username: string; password: string }) => {
  return fetch(`${apiUrl}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (res) => {
    if (res.ok) {
      let data = await res.json();
      return handleUserRespone(data);
    } else {
      return Promise.reject(data);
    }
  });
};
export const logout = async () =>
  window.localStorage.removeItem(localStorageKey);

import { baseUrl } from '../utils/constant';

export const getUsersApi = async () => {
  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const getUserById = async (userId: number) => {
  const response = await fetch(baseUrl + `/${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

export const updateUser = async (userId: number, data: any) => {
  const response = await fetch(baseUrl + `/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const deleteUser = async (userId: number) => {
  const response = await fetch(baseUrl + `/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

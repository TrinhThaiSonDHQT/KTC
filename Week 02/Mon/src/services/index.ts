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

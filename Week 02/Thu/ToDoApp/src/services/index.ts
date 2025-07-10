import { baseUrl, defaultHeader } from '../utils/constants';

export const login = async (username: string, password: string) => {
  const res = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: defaultHeader,
    body: JSON.stringify({ username, password }),
  });
  return await res.json();
};

export const getTasks = async () => {  
  const res = await fetch(`${baseUrl}/workspaces/tasks`, {
    method: 'GET',
    headers: defaultHeader,
  });
  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  } 
  return await res.json();
}

export const getUserTasks = async (userId: number) => {  
  console.log(`${baseUrl}/workspaces/tasks/${userId}`);
  
  const res = await fetch(`${baseUrl}/workspaces/tasks/${userId}`, {
    method: 'GET',
    headers: defaultHeader,
  });
  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  } 
  return await res.json();
}

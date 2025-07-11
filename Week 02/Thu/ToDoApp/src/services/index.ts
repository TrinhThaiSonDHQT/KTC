import type { Task } from '../pages/AllTasks';
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
  const res = await fetch(`${baseUrl}/workspaces/tasks/assignee/${userId}`, {
    method: 'GET',
    headers: defaultHeader,
  });
  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  } 
  return await res.json();
}

export const createTask = async (task: Task) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks`, {
    method: 'POST',
    headers: defaultHeader,
    body: JSON.stringify(task),
  });
  return response.json();
};

export const getTaskByID = async (taskId: number | null) => {   
  const res = await fetch(`${baseUrl}/workspaces/tasks/${taskId}`, {
    method: 'GET',
    headers: defaultHeader,
  });
  // console.log(res); 
  return res;
}

export const updateTask = async (id: number, task: Task) => {
  const response = await fetch(`${baseUrl}/workspaces/tasks/${id}`, {
    method: 'PATCH',
    headers: defaultHeader,
    body: JSON.stringify(task),
  });
  // console.log(response);
  
  return response.json();
};

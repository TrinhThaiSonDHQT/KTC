import type { LoginRequest } from '../types';
import apiClient from '../utils/apiClient';

export async function loginApi({ username, password }: LoginRequest) {
  try {
    const response = await apiClient.post('/auth/login', {
      username,
      password,
    });
    // console.log(response);
    
    return response;
  } catch (error: any) {
    // You can add better error handling here
    throw new Error(error.response?.data?.message || 'Login failed');
  }
}

// export const getTasks = async () => {
//   const res = await apiClient(`/workspaces/tasks`, {});
//   if (!res.ok) {
//     throw new Error('Failed to fetch tasks');
//   }
//   return await res.json();
// };

// export const getUserTasks = async (userId: number) => {
//   const res = await apiClient(`/workspaces/tasks/assignee/${userId}`, {});
//   if (!res.ok) {
//     throw new Error('Failed to fetch tasks');
//   }
//   return await res.json();
// };

// export const createTask = async (task: Task) => {
//   const response = await apiClient(`/workspaces/tasks`, {
//     body: JSON.stringify(task),
//   });
//   return response.json();
// };

// export const getTaskByID = async (taskId: number | null) => {
//   const res = await apiClient(`/workspaces/tasks/${taskId}`, {});
//   // console.log(res);
//   return res;
// };

// export const updateTask = async (id: number, task: Task) => {
//   const response = await apiClient(`/workspaces/tasks/${id}`, {
//     body: JSON.stringify(task),
//   });
//   // console.log(response);

//   return response.json();
// };

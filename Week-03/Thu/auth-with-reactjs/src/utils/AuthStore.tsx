import { create } from 'zustand';
import apiClient from './apiClient';
import type { Store, Task } from '../types';
import { devtools, persist } from 'zustand/middleware';

// export const useStore = create<Store>((set, get) => ({
//   access_token: '',
//   refresh_token: '',
//   loggedInUser: null,
//   loading: false,
//   // tasks: [],
//   // selectedTask: null,
//   error: null,

//   // Authentication
//   login: async ({ username, password, navigate }) => {
//     try {
//       set(
//         {
//           loggedInUser: undefined,
//           access_token: undefined,
//           refresh_token: undefined,
//           error: null,
//           loading: true,
//         },
//         false
//         // { type: '@AUTH/LOGIN/LOADING' }
//       );

//       const response: any = (await apiClient.post('/auth/login', {
//         username,
//         password,
//       })) as any;
//       console.log(response);

//       set(
//         {
//           access_token: response.access_token,
//           refresh_token: response.refresh_token,
//           loggedInUser: response.loggedInUser,
//           loading: false,
//           error: null,
//         },
//         false
//         // { type: '@AUTH/LOGIN/SUCCESS' }
//       );
//       navigate('/dashboard');
//     } catch (error) {
//       set(
//         {
//           error: null,
//           access_token: undefined,
//           refresh_token: undefined,
//           loggedInUser: undefined,
//         },
//         false
//         // {
//         //   type: '@AUTH/LOGIN/ERROR',
//         // }
//       );
//     }
//   },
//   // logout: () => set({ user: null, tasks: [], selectedTask: null }),
//   logOut: async () => {
//     set({
//       access_token: undefined,
//       refresh_token: undefined,
//       loggedInUser: undefined,
//     });
//   },

//   // Tasks management
//   // setTasks: (tasks: Task[]) => set({ tasks }),
//   // setSelectedTask: (task: Task | null) => set({ selectedTask: task }),
//   setLoading: (loading: boolean) => set({ loading }),
//   setError: (error: string | null) => set({ error }),

//   // Update task in store
//   // updateTaskInStore: (updatedTask: Task) => {
//   //   const { tasks } = get();
//   //   const newTasks = tasks.map((task) =>
//   //     task.id === updatedTask.id ? updatedTask : task
//   //   );
//   //   set({ tasks: newTasks, selectedTask: updatedTask });
//   // },
// }));

export const useStore = create<Store>()(
  devtools(
    persist(
      (set) => {
        return {
          access_token: undefined,
          refresh_token: undefined,
          loggedInUser: undefined,
          loading: false,
          error: null,
          selectedTask: null,
          tasks: [],
          login: async ({ username, password, navigate }) => {
            try {
              set(
                {
                  loggedInUser: undefined,
                  access_token: undefined,
                  refresh_token: undefined,
                  error: null,
                  loading: true,
                },
                false,
                { type: '@AUTH/LOGIN/LOADING' }
              );

              const response: any = (await apiClient.post('/auth/login', {
                username,
                password,
              })) as any;

              set(
                {
                  access_token: response.access_token,
                  refresh_token: response.refresh_token,
                  loggedInUser: response.loggedInUser,
                  loading: false,
                  error: null,
                },
                false,
                { type: '@AUTH/LOGIN/SUCCESS' }
              );
              navigate('/dashboard');
            } catch (error) {
              set(
                {
                  error: null,
                  access_token: undefined,
                  refresh_token: undefined,
                  loggedInUser: undefined,
                },
                false,
                {
                  type: '@AUTH/LOGIN/ERROR',
                }
              );
            }
          },

          logOut: async () => {
            set({
              access_token: undefined,
              refresh_token: undefined,
              loggedInUser: undefined,
            });
          },
          setTasks: (tasks: Task[]) => set({ tasks }),
          setSelectedTask: (task: Task | null) => set({ selectedTask: task }),
          setLoading: (loading: boolean) => set({ loading }),
          setError: (error: string | null) => set({ error }),
          updateTaskInStore: (updatedTask: Task) => {
            const { tasks } = get();
            const newTasks = tasks.map((task: Task) =>
              task.id === updatedTask.id ? updatedTask : task
            );
            set({ tasks: newTasks, selectedTask: updatedTask });
          },
        };
      },
      {
        name: 'auth-storage',
      }
    )
  )
);
function get(): { tasks: any } {
  throw new Error('Function not implemented.');
}

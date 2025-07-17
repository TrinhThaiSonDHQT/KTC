import type { NavigateFunction } from 'react-router-dom';

export interface LoggedInUser {
  id: string | number;
  email: string;
  isActive: boolean;
  roles: [
    {
      id: string | number;
      name: string;
    }
  ];
}

export interface Task {
  id: number;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
  assignee_id: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface TaskFormData {
  id?: number;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
  assignee: string;
  description?: string;
}

export interface StoreState {
  access_token?: string;
  refresh_token?: string;
  loggedInUser?: LoggedInUser | null;
  loading: boolean;
  tasks: Task[];
  selectedTask: Task | null;
  error: string | null | undefined;
}

export interface StoreActions {
  login: ({
    username,
    password,
    navigate,
  }: {
    username: string;
    password: string;
    navigate: NavigateFunction;
  }) => Promise<void>;
  logOut: () => Promise<void>;
  setTasks: (tasks: Task[]) => void;
  setSelectedTask: (task: Task | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  updateTaskInStore: (updatedTask: Task) => void;
}

export type Store = StoreState & StoreActions;

export interface ApiResponse<T> {
  data: T;
}

export interface LoginRequest {
  username: string;
  password: string;
}


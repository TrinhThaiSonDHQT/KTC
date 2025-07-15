import { createContext, useState } from 'react';

export type User = {
  id: number | string | null;
  name: string;
  email: string;
  age: number | null;
};

type Users = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};

export const UserContext = createContext<Users | null>({
  users: [],
  setUsers: () => {}
});

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [users, setUsers] = useState<User[]>([]);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export default UsersProvider;

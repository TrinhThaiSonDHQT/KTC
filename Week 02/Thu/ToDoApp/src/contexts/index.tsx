import { createContext, useState } from 'react';

type User = {
  id: number | null,
  email: string
}

type Auth = {
  isAuthenticated: boolean;
  user: User;
};

type AuthContextType = {
  auth: Auth,
  setAuth: React.Dispatch<React.SetStateAction<Auth>>
}



export const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [auth, setAuth] = useState<Auth>({
    isAuthenticated: false,
    user: {
      id: null,
      email: ''
    },
  });

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

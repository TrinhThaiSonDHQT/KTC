import AuthContextProvider from './AuthContextProvider';

const SystemContext = ({ children }: { children: React.ReactNode }) => {
  return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default SystemContext;

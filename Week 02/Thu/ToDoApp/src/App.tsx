import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import AuthContextProvider from './contexts';

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={Routes} />
    </AuthContextProvider>
  );
}

export default App;

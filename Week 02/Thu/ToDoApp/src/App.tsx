import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import SystemContext from './contexts';

function App() {
  return (
    <SystemContext>
      <RouterProvider router={Routes} />
    </SystemContext>
  );
}

export default App;

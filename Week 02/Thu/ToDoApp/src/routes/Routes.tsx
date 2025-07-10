import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import MyTasks from '../pages/MyTasks';
import AllTasks from '../pages/AllTasks';
import CreateTask from '../pages/CreateTask';
import UpdateTask from '../pages/UpdateTask';
import NoPage from '../pages/NoPage';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <AllTasks />,
      },
      {
        path: 'all-tasks',
        element: <AllTasks />,
      },
      {
        path: 'my-tasks/:id',
        element: <MyTasks />,
      },
      {
        path: 'create-task',
        element: <CreateTask />,
      },
      {
        path: 'update-task:id',
        element: <UpdateTask />,
      },
    ],
  },
  {
    path: '/*',
    element: <NoPage />,
  },
]);

export default Routes;

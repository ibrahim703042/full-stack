import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClientLayout from '../pages/Home';
import DashboardLayout from '../pages/admin';
import List from '../pages/admin/list/List';
import RegistrationForm from '../pages/frontend/User';
import Role from '../pages/frontend/Role';
import PostForm from '../pages/frontend/PostForm_3';
import LoginForm from '../pages/frontend/LoginForm';
import ErrorPage from '../pages/error/error-page';
// import ApiTest from '../pages/frontend/apiTest/ApiTest';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ClientLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, path: '/', element: <ApiTest /> },
      { index: true, path: '/', element: <RegistrationForm /> },
      // Users
      {
        path: '/users',
        element: <RegistrationForm />,
      },
      {
        path: '/roles',
        element: <Role />,
      },
      {
        path: '/posts',
        element: <PostForm />,
      },
      {
        path: '/login',
        element: <LoginForm />,
      },
    ],
  },

  // Admin router
  {
    path: '/admin',
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, path: '/admin/list', element: <Dashboard /> },
      // Users
      {
        path: '/admin/users',
        element: <List />,
        children: [{ path: '/admin/users/list', element: <List /> }],
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

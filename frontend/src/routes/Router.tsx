import Login from '../pages/Login.tsx';
import Register from '../pages/Register.tsx';
import Home from '../pages/Home.tsx';
import { createBrowserRouter } from 'react-router';
import Layout from '../layout/Layout.tsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { 
        path: "/", 
        element: <Home />
      },
    ]
  },
  { 
    path: "/login", 
    element: <Login />
  },
  { 
    path: "/register", 
    element: <Register />
  }
]);

export default router;
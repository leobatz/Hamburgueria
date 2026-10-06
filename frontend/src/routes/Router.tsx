import Login from '../pages/Login.tsx';
import Register from '../pages/Register.tsx';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
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
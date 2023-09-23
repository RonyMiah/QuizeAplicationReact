import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import '../components/style/App.css';
import { AuthProvider } from '../hooks/Context/AuthContext';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Quize from '../pages/Quize';
import Result from '../pages/Result';
import Signup from '../pages/Signup';
import Layout from './Layout';
import PrivetRoute from './PrivetRoute';
import PublicRoute from './PublicRoute';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="quize"
          element={
            <PrivetRoute>
              {' '}
              <Quize />
            </PrivetRoute>
          }
        />
        <Route
          path="result"
          element={
            <PrivetRoute>
              <Result />
            </PrivetRoute>
          }
        />
        <Route
          path="signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
      </Route>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

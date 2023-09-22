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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="quize" element={<Quize />} />
        <Route path="result" element={<Result />} />
        <Route path="signup" element={<Signup />} />
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

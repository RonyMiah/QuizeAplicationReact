import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/Context/AuthContext';

// eslint-disable-next-line react/prop-types
export default function PublicRoute({children}) {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/" replace />;
  } else{
    return children
  }
}

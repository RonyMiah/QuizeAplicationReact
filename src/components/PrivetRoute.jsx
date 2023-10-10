import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/Context/AuthContext';

// eslint-disable-next-line react/prop-types
function PrivetRoute({ children }) {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/signup" replace />;
  } else {
    return children;
  }
}

export default PrivetRoute;

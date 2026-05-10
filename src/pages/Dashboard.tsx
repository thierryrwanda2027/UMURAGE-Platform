import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export function Dashboard() {
  const { user } = useAuth();

  if (!user) return <Navigate to="/vault" replace />;

  if (user.isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  if (user.isCertified) {
    return <Navigate to="/certificate" replace />;
  } else if (user.passedQuiz) {
    return <Navigate to="/simulator" replace />;
  } else {
    return <Navigate to="/vault" replace />;
  }
}

import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
export default function Private() {
  const [authToken] = useContext(AuthContext)!;

  if (!authToken) {
    return <Navigate to="/auth/signin" />;
  }

  return <Outlet />;
}

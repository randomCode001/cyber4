import Cookies from 'js-cookie';
import { createContext, useState } from 'react';

type AuthContextType = [
  string | undefined,
  React.Dispatch<React.SetStateAction<string | undefined>>,
];

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = Cookies.get('5-token');
  const [authToken, setAuthToken] = useState<string | undefined>(token);

  return (
    <AuthContext.Provider value={[authToken, setAuthToken]}>
      {children}
    </AuthContext.Provider>
  );
}

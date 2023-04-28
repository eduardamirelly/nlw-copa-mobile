import { ReactNode, createContext } from "react";
import * as AuthSession from 'expo-auth-session';

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }: AuthProviderProps) {

  async function signIn() {
    console.log('SignIn');
  }

  return (
    <AuthContext.Provider value={{
      signIn,
      user: {
        name: 'Duda',
        avatarUrl: 'https://github.com/eduardamirelly.png',
      }
    }}>
      {children}
    </AuthContext.Provider>
  );
}
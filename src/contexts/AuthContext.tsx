import { createContext } from "react";

interface UserProps {
  name: string;
  avatarUrl: string;
}

export interface AuthContextDataProps {
  user: UserProps;
}

export const AuthContext = createContext({});
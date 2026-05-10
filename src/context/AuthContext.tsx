import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  firstName?: string;
  lastName?: string;
  phone?: string;
  email: string;
  password?: string;
  passedQuiz: boolean;
  isCertified: boolean;
  isAdmin?: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, pass: string) => void;
  register: (data: { firstName: string; lastName: string; phone: string; email: string; pass: string }) => void;
  logout: () => void;
  updateUserStatus: (updates: Partial<User>) => void;
  getAllUsers: () => User[];
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const ADMIN_EMAIL = "thierryniyonkuru8@gmail.com";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const currentEmail = localStorage.getItem("currentUser");
    if (currentEmail) {
      if (currentEmail === ADMIN_EMAIL) {
        setUser({ email: currentEmail, passedQuiz: true, isCertified: true, isAdmin: true });
        return;
      }
      const usersStr = localStorage.getItem("users");
      if (usersStr) {
        const users = JSON.parse(usersStr);
        if (users[currentEmail]) {
          setUser(users[currentEmail]);
        }
      }
    }
  }, []);

  const getUsers = () => {
    const usersStr = localStorage.getItem("users");
    return usersStr ? JSON.parse(usersStr) : {};
  };

  const saveUsers = (users: any) => {
    localStorage.setItem("users", JSON.stringify(users));
  };

  const login = (email: string, pass: string) => {
    if (email === ADMIN_EMAIL && pass === "admin123") {
      localStorage.setItem("currentUser", email);
      setUser({ email, passedQuiz: true, isCertified: true, isAdmin: true });
      setError(null);
      return;
    }
    const users = getUsers();
    if (users[email] && users[email].password === pass) {
      localStorage.setItem("currentUser", email);
      setUser(users[email]);
      setError(null);
    } else {
      setError("Login failed: Incorrect credentials.");
    }
  };

  const register = (data: { firstName: string; lastName: string; phone: string; email: string; pass: string }) => {
    if (data.pass.length < 6) {
      setError("Password must be 6+ characters.");
      return;
    }
    const users = getUsers();
    if (users[data.email]) {
      setError("Sign Up failed: Email already exists.");
      return;
    }
    
    const newUser: User = {
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      email: data.email,
      password: data.pass,
      passedQuiz: false,
      isCertified: false
    };
    
    users[data.email] = newUser;
    saveUsers(users);
    
    localStorage.setItem("currentUser", data.email);
    setUser(newUser);
    setError(null);
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    setUser(null);
  };

  const updateUserStatus = (updates: Partial<User>) => {
    if (!user || user.isAdmin) return;
    
    const users = getUsers();
    if (users[user.email]) {
      const updatedUser = { ...users[user.email], ...updates };
      users[user.email] = updatedUser;
      saveUsers(users);
      setUser(updatedUser);
    }
  };

  const getAllUsers = (): User[] => {
    const users = getUsers();
    return Object.values(users);
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider value={{ user, login, register, logout, updateUserStatus, getAllUsers, error, clearError }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

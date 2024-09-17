'use client'

import { Role } from '@/types/shared/type'
import React, { createContext, useContext, useState } from 'react'

interface AuthState {
  token: string | null
  role: Role | null
}

interface AuthContextType {
  auth: AuthState
  setAuth: (auth: AuthState) => void
  clearAuth: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)


export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [auth, setAuthState] = useState<AuthState>({ token: null, role: null })

  const setAuth = (newAuth: AuthState) => {
    setAuthState(newAuth)
  }

  const clearAuth = () => {
    setAuthState({ token: null, role: null })
  }

  return (
    <AuthContext.Provider value={{ auth, setAuth, clearAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}